import { IPageData } from 'interface/pageDataInterface'
import { ITestimonials } from 'interface/testimonialsInterface'

import { api } from './api'

export const testimonialsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainTestimonials: builder.query<ITestimonials[], void>({
      query: () => ({
        url: 'testimonials/main-testimonials'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Testimonials', id } as const)),
        { type: 'Testimonials' as const, id: 'LIST' }
      ]
    }),
    getAllTestimonials: builder.query<IPageData<ITestimonials[]>, void>({
      query: () => ({
        url: 'testimonials/testimonials'
      }),
      providesTags: () => [{ type: 'Testimonials' }]
    })
  }),
  overrideExisting: true
})

export const {
  useGetMainTestimonialsQuery,
  useGetAllTestimonialsQuery
} = testimonialsApi
