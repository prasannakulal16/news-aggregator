import { useState } from 'react'
import { NewsSection } from '../../components/NewsSection'
import FilterModal from '../../components/CustomFilter'
import { categories, sources } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles, setCategory, setSource } from '../../features/slice/ArticleSlice'

export const HomePage = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state: any) => state.articles)
  const [searchInput, setSearchInput] = useState<string>('')
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
  const [selectedSource, setSelectedSource] = useState<
    | {
        name: string
        key: string
      }
    | undefined
  >(filters.source || sources[0])
  const [selectedCategory, setSelectedCategory] = useState<string>(
    filters.category || categories[0]
  )

  const handleSourceChange = (sourceInput: string) => {
    const selectSource = sources.find((source) => source.key === sourceInput)
    setSelectedSource(selectSource)
  }

  const handleCategoryChange = (categoryInput: string) => {
    const selectCategory = categories.find((category) => category.key === categoryInput)
    if (selectCategory) setSelectedCategory(selectCategory.key)
  }

  const handleOpenFilter = () => {
    setIsFilterModalVisible(true)
    setSearchInput('')
  }

  const handleSubmitFilter = () => {
    dispatch(setCategory(selectedCategory))
    dispatch(setSource(selectedSource))
    dispatch(
      fetchArticles({
        category: selectedCategory,
        source: selectedSource && selectedSource.key
      })
    )
    setIsFilterModalVisible(false)
  }

  const handleCloseFilter = () => {
    setSelectedSource(sources[0])
    setSelectedCategory(categories?.[0]?.key)
    dispatch(
      fetchArticles({
        q: searchInput
      })
    )
    dispatch(setCategory(categories[0]))
    dispatch(setSource(sources[0]))
    setIsFilterModalVisible(false)
  }

  return (
    <>
      <NewsSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleOpenFilter={handleOpenFilter}
        selectedSource={selectedSource}
        selectedCategory={selectedCategory}
      />

      <FilterModal
        sources={sources}
        categories={categories}
        isVisible={isFilterModalVisible}
        onConfirm={handleSubmitFilter}
        onCategoryChange={handleCategoryChange}
        onClose={handleCloseFilter}
        onSourceChange={handleSourceChange}
        selectedCategory={selectedCategory}
        selectedSource={selectedSource?.key}
      />
    </>
  )
}
