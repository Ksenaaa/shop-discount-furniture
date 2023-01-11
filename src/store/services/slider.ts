import { IImgSlider } from 'interface/sliderInterface'

import { api } from './api'

export const sliderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSliderImgs: builder.query<IImgSlider[], void>({
      query: () => ({
        url: 'slider'
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Slider', id } as const)),
        { type: 'Slider' as const, id: 'LIST' }
      ]
    })
  }),
  overrideExisting: true
})

export const {
  useGetSliderImgsQuery
} = sliderApi
