import { IImgMainCatalog } from 'interface/catalogInterface'

import { api } from './api'

export const mainCatalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainCatalogImgs: builder.query<IImgMainCatalog[], void>({
      query: () => ({
        url: 'main-catalog'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'MainCatalog', id } as const)),
        { type: 'MainCatalog' as const, id: 'LIST' }
      ]
    })
  }),
  overrideExisting: true
})

export const {
  useGetMainCatalogImgsQuery
} = mainCatalogApi
