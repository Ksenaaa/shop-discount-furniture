import { ICardNews, INews, INewsIds } from 'interface/newsInterface'
import { IPageData } from 'interface/pageDataInterface'
import { IParamsGetQuery } from 'interface/paramsGetQueryInterface'

import { api } from './api'

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainNews: builder.query<ICardNews[], void>({
      query: () => 'news/main-news',
      providesTags: () => [{ type: 'News' }]
    }),
    getAllNews: builder.query<IPageData<ICardNews[]>, Pick<IParamsGetQuery, 'page' | 'limit'>>({
      query: ({ page, limit }) => ({
        url: 'news/all-news',
        params: {
          page,
          limit
        }
      }),
      providesTags: () => [{ type: 'News' }]
    }),
    getNewsIds: builder.query<INewsIds[], void>({
      query: () => 'news/news-ids',
      providesTags: () => [{ type: 'News' }]
    }),
    getOneNews: builder.query<INews, string>({
      query: id => `news/${id}`,
      providesTags: (result, error, arg) => [{ type: 'News', id: arg }]
    })
  }),
  overrideExisting: true
})

export const {
  useGetMainNewsQuery,
  useGetAllNewsQuery,
  useGetNewsIdsQuery,
  useGetOneNewsQuery
} = newsApi
