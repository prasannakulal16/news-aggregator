import { useEffect, useState } from 'react'
import { Button, Drawer, Form, Select, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { NewsSection } from '../../components/NewsSection'
import { fetchArticles, setCategory, setSource } from '../../features/slice/ArticleSlice'
import { ArticlesState } from '../../utils/types'
import { categories, sources } from '../../config/constants'
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'

interface Article {
  source: string
  author: string
  category: string
}

export const PersonalizedNewsPage: React.FC = () => {
  const dispatch = useDispatch()
  const { articles } = useSelector((state: any) => state.articles)

  const { filters }: ArticlesState = useSelector((state: any) => state.articles)
  const [selectedSource] = useState(filters.source || sources[0])

  const [selectedCategory] = useState(filters.category || categories[0])
  const [savedSources, setSavedSources] = useState<string[]>([])
  const [savedAuthors, setSavedAuthors] = useState<string[]>([])
  const [savedCategories, setSavedCategories] = useState<string[]>([])

  const [tempSources, setTempSources] = useState<string[]>([])
  const [tempAuthors, setTempAuthors] = useState<string[]>([])
  const [tempCategories, setTempCategories] = useState<string[]>([])
  const [personalizedNews, setPersonalizedNews] = useState<Article[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const uniqueSources = Array.from(new Set(articles.map((article: Article) => article.source)))
  const uniqueAuthors = Array.from(new Set(articles.map((article: Article) => article.author)))
  const uniqueCategories = Array.from(new Set(articles.map((article: Article) => article.category)))

  const handleApply = () => {
    setSavedSources(tempSources)
    setSavedAuthors(tempAuthors)
    setSavedCategories(tempCategories)

    const filteredArticles =
      tempSources.length === uniqueSources.length
        ? articles
        : articles.filter(
            (article: Article) =>
              tempSources.includes(article.source) ||
              tempAuthors.includes(article.author) ||
              tempCategories.includes(article.category)
          )

    setPersonalizedNews(filteredArticles)
    setIsDrawerOpen(false)
  }

  const handleDrawerClose = () => {
    setTempSources(savedSources)
    setTempAuthors(savedAuthors)
    setTempCategories(savedCategories)
    setIsDrawerOpen(false)
  }

  useEffect(() => {
    const savedSources = JSON.parse(localStorage.getItem('preferredSources') || '[]')
    const savedAuthors = JSON.parse(localStorage.getItem('preferredAuthors') || '[]')
    const savedCategories = JSON.parse(localStorage.getItem('preferredCategories') || '[]')

    setSavedSources(savedSources)
    setSavedAuthors(savedAuthors)
    setSavedCategories(savedCategories)

    setTempSources(savedSources)
    setTempAuthors(savedAuthors)
    setTempCategories(savedCategories)

    const filteredArticles =
      savedSources.length === uniqueSources.length
        ? articles
        : articles.filter(
            (article: Article) =>
              savedSources.includes(article.source) ||
              savedAuthors.includes(article.author) ||
              savedCategories.includes(article.category)
          )

    setPersonalizedNews(filteredArticles)
  }, [articles, uniqueSources.length])

  useEffect(() => {
    localStorage.setItem('preferredSources', JSON.stringify(savedSources))
    localStorage.setItem('preferredAuthors', JSON.stringify(savedAuthors))
    localStorage.setItem('preferredCategories', JSON.stringify(savedCategories))
  }, [savedSources, savedAuthors, savedCategories])

  useEffect(() => {
    dispatch(setCategory(selectedCategory))
    dispatch(setSource(filters.source || sources[0]))
    dispatch(
      fetchArticles({
        category: selectedCategory
      })
    )
  }, [dispatch, selectedCategory, selectedSource])

  return (
    <div className="p-4">
      <div className="flex justify-end items-center mb-4">
        <Button
          type="primary"
          icon={personalizedNews?.length ? <EditOutlined /> : <PlusCircleOutlined />}
          onClick={() => setIsDrawerOpen(true)}
          size="middle"
          className="flex items-center"
        >
          {personalizedNews?.length ? 'Edit Favourites' : 'Add Favourites'}
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <NewsSection personalizedNews={personalizedNews} />
      )}

      <Drawer
        title="Personalized Settings"
        placement="right"
        onClose={handleDrawerClose}
        open={isDrawerOpen}
        width={400}
      >
        <h5 className="font-semibold mb-2">Filter By Sources</h5>
        <Form layout="vertical">
          <Form.Item>
            <Select
              mode="multiple"
              placeholder="Choose sources"
              options={uniqueSources.map((source) => ({ value: source, label: source }))}
              value={tempSources}
              onChange={(value) => setTempSources(value)}
              className="w-full"
            />
          </Form.Item>
        </Form>

        <h5 className="font-semibold mt-4 mb-2">Filter By Categories</h5>
        <Form layout="vertical">
          <Form.Item>
            <Select
              mode="multiple"
              placeholder="Choose categories"
              options={uniqueCategories.map((category) => ({ value: category, label: category }))}
              value={tempCategories}
              onChange={(value) => setTempCategories(value)}
              className="w-full"
            />
          </Form.Item>
        </Form>

        <h5 className="font-semibold mt-4 mb-2">Filter By Authors</h5>
        <Form layout="vertical">
          <Form.Item>
            <Select
              mode="multiple"
              placeholder="Choose authors"
              options={uniqueAuthors.map((author) => ({ value: author, label: author }))}
              value={tempAuthors}
              onChange={(value) => setTempAuthors(value)}
              className="w-full"
            />
          </Form.Item>
        </Form>

        <Button type="primary" onClick={handleApply} className="w-full mt-4">
          Apply
        </Button>
      </Drawer>
    </div>
  )
}
