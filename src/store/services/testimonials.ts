import { IPageData } from 'interface/pageDataInterface'
import { IParamsGetQuery } from 'interface/paramsGetQueryInterface'
import { ITestimonials } from 'interface/testimonialsInterface'

import { api } from './api'

export const testimonialsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMainTestimonials: builder.query<ITestimonials[], void>({
      query: () => 'testimonials/main-testimonials',
      providesTags: () => [{ type: 'Testimonials' }]
    }),
    getTestimonials: builder.query<IPageData<ITestimonials[]>, Pick<IParamsGetQuery, 'page' | 'limit'>>({
      query: ({ page, limit }) => ({
        url: 'testimonials/testimonials',
        params: {
          page,
          limit
        }
      }),
      providesTags: () => [{ type: 'Testimonials' }]
    })
  }),
  overrideExisting: true
})

export const {
  useGetMainTestimonialsQuery,
  useGetTestimonialsQuery
} = testimonialsApi
