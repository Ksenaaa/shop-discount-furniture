import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'furnitureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  tagTypes: ['Slider', 'MainCatalog', 'News', 'Testimonials'],
  endpoints: () => ({})
})
