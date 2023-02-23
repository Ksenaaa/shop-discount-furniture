import { ICardColor } from 'interface/colorInterface'

import { api } from './api'

export const colorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getColors: builder.query<ICardColor[], void>({
      query: () => ({
        url: 'colors'
      }),
      providesTags: () => [{ type: 'Colors' }]
    })
  }),
  overrideExisting: true
})

export const {
  useGetColorsQuery
} = colorsApi
