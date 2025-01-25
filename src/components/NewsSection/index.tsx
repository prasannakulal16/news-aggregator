import { Key, useEffect } from 'react'
import SearchInput from '../SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from '../../utils/hooks/useDebounce'
import {
  fetchArticles,
  setCategory,
  setEndArticleDate,
  setQuery,
  setSource,
  setStartArticleDate
} from '../../features/slice/ArticleSlice'
import { sources } from '../../config/constants'
import { FilterOutlined } from '@ant-design/icons'
import CustomButton from '../CustomButton'
import CustomCard from '../Card'
import { NewsDescription } from './NewsDescription'
import { Loader } from '../Loader'
import CustomDatePicker from '../CustomDatepicker'
import { NoDataFound } from '../NoDataFound'

interface NewsSectionI {
  personalizedNews?: any[]
  searchInput?: string
  setSearchInput?: React.Dispatch<React.SetStateAction<string>>
  handleOpenFilter?: any
  selectedSource?: any
  selectedCategory?: any
}

export const NewsSection = ({
  searchInput,
  setSearchInput = () => {},
  handleOpenFilter,
  selectedCategory,
  selectedSource,
  personalizedNews
}: NewsSectionI) => {
  const dispatch = useDispatch()

  const selectedNewsSource = sources[0]

  const debouncedSearchTerm = useDebounce(searchInput, 800)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }
  const { status, filters } = useSelector((state: any) => state.articles)
  let { articles } = useSelector((state: any) => state.articles)
  articles = personalizedNews ? personalizedNews : articles

  const heading = personalizedNews
    ? 'personalized'
    : filters.query
      ? filters.query
      : filters.category

  const handleDateChange = (dates: { startDate: any; endDate: any }) => {
    dispatch(setEndArticleDate(dates.startDate))
    dispatch(setStartArticleDate(dates.endDate))

    dispatch(
      fetchArticles({
        startArticleDate: dates.startDate,
        endArticleDate: dates.endDate
      })
    )
  }

  useEffect(() => {
    dispatch(setQuery(debouncedSearchTerm))
    dispatch(setCategory(selectedCategory))
    dispatch(setSource(selectedSource))
    dispatch(
      fetchArticles({
        query: debouncedSearchTerm,
        source: selectedNewsSource.key
      })
    )
  }, [debouncedSearchTerm, dispatch, selectedNewsSource.key])

  return (
    <div>
      <div className="sm:flex gap-4 items-center justify-between mb-6">
        <h1 className="text-blue-800-600 text-4xl font-bold sm:pb-0 pb-4">
          Top {heading?.name} news
        </h1>
        {!personalizedNews && (
          <div className="flex gap-4 items-center ">
            <CustomDatePicker onFilterChange={handleDateChange} />
            <SearchInput
              placeholder="Enter article name to search"
              onSearchChange={handleSearch}
              enterButton="Search"
              className="max-w-md"
            />
            <CustomButton onClick={handleOpenFilter} icon={<FilterOutlined />} />
          </div>
        )}
      </div>

      {status === 'loading' ? (
        <Loader />
      ) : personalizedNews && articles?.length < 1 ? (
        <>
          <NoDataFound message="No personalized news available. Try adding news to personalize your feed." />
        </>
      ) : articles?.length === 0 ? (
        <>
          <NoDataFound message="No news available. Adjust the filters and try again." />
        </>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {articles?.map(
            (
              article: {
                imgSrc: string
                title: string
                author: string
                url: string
                source: string
                publishedAt: Date
              },
              index: Key | null | undefined
            ) => {
              return (
                <CustomCard
                  imageSrc={article.imgSrc}
                  key={index}
                  title={article.title}
                  description={
                    <NewsDescription
                      author={article.author}
                      channel={article.source}
                      publishedAt={article.publishedAt}
                    />
                  }
                  newsUrl={article.url}
                />
              )
            }
          )}
        </div>
      )}
    </div>
  )
}
