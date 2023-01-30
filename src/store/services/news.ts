import { IMainNews } from 'interface/newsInterface'

import { api } from './api'

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainNews: builder.query<IMainNews[], void>({
      query: () => ({
        url: 'news/main-news'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'News', id } as const)),
        { type: 'News' as const, id: 'LIST' }
      ]
    })
  }),
  overrideExisting: true
})

export const {
  useGetMainNewsQuery
} = newsApi
