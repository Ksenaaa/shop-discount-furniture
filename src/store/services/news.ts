import { ICardNews, INews, INewsIds } from 'interface/newsInterface'
import { IPageData } from 'interface/pageDataInterface'

import { api } from './api'

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainNews: builder.query<ICardNews[], void>({
      query: () => ({
        url: 'news/main-news'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'News', id } as const)),
        { type: 'News' as const, id: 'LIST' }
      ]
    }),
    getAllNews: builder.query<IPageData<ICardNews[]>, void>({
      query: () => ({
        url: 'news/all-news'
      }),
      providesTags: () => [{ type: 'News' }]
    }),
    getNewsIds: builder.query<INewsIds[], void>({
      query: () => ({
        url: 'news/news-ids'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'News', id } as const)),
        { type: 'News' as const, id: 'LIST' }
      ]
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
