import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Article, ArticlesState } from '../../utils/types'
import {
  fetchGuardianArticles,
  fetchNYTimesArticles,
  fetchNewsAPIArticles
} from '../../services/apiServerice'

export const fetchArticles: any = createAsyncThunk(
  'articles/fetchArticles',
  async (params: any, { getState }: any) => {
    const { query, source } = getState().articles.filters

    let articles: Article[] = []

    if (params.startArticleDate === null && params.endArticleDate === null) {
      delete params.startArticleDate
      delete params.endArticleDate
    }

    // Fetch from NewsAPI
    if (source.key === 'news-api' || source.key === 'all') {
      const newsAPIArticles = await fetchNewsAPIArticles(query, params)
      articles = [...articles, ...newsAPIArticles]
    }

    // Fetch from The Guardian API
    if (source.key === 'guardian-api' || source.key === 'all') {
      const guardianArticles = await fetchGuardianArticles(query, params)
      articles = [...articles, ...guardianArticles]
    }

    // Fetch from NYT API
    if (source.key === 'ny-times' || source.key === 'all') {
      const nyTimesArticles = await fetchNYTimesArticles(query, params)
      articles = [...articles, ...nyTimesArticles]
    }
    return articles
  }
)
const initialState: ArticlesState = {
  articles: [],
  status: 'idle',
  error: null,
  filters: {
    query: '',
    category: '',
    startArticleDate: '',
    endArticleDate: '',
    source: '',
    author: '',
    preferredSources: [],
    preferredCategories: [],
    preferredAuthors: []
  }
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.filters.query = action.payload
    },
    setCategory(state, action) {
      state.filters.category = action.payload
    },
    setStartArticleDate(state, action) {
      state.filters.startArticleDate = action.payload
    },
    setEndArticleDate(state, action) {
      state.filters.endArticleDate = action.payload
    },
    setSource(state, action) {
      state.filters.source = action.payload
    },
    setAuthor(state, action) {
      state.filters.author = action.payload
    },
    setPreferredSources(state, action) {
      state.filters.preferredSources = action.payload
    },
    setPreferredCategories(state, action) {
      state.filters.preferredCategories = action.payload
    },
    setPreferredAuthors(state, action) {
      state.filters.preferredAuthors = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.articles = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const {
  setQuery,
  setCategory,
  setStartArticleDate,
  setEndArticleDate,
  setAuthor,
  setSource,
  setPreferredSources,
  setPreferredCategories,
  setPreferredAuthors
} = articlesSlice.actions

export default articlesSlice.reducer
