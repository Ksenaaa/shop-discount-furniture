import { ITestimonials } from 'interface/testimonialsInterface'

import { api } from './api'

export const testimonialsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query<ITestimonials[], void>({
      query: () => ({
        url: 'testimonials'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Testimonials', id } as const)),
        { type: 'Testimonials' as const, id: 'LIST' }
      ]
    })
  }),
  overrideExisting: true
})

export const {
  useGetTestimonialsQuery
} = testimonialsApi
