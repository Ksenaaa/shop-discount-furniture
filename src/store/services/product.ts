import { IPageData } from 'interface/pageDataInterface'
import { ICardProduct, IProduct } from 'interface/productInterface'

import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSomeNewProducts: builder.query<ICardProduct[], void>({
      query: () => ({
        url: 'product/new'
      }),
      providesTags: () => [{ type: 'Product' }]
    }),
    getAllProductsByCategory: builder.query<IPageData<ICardProduct[]>, string>({
      query: category => `product/${category}`,
      providesTags: (arg) => [{ type: 'Product', category: arg }]
    }),
    getSomeProductsByCategory: builder.query<ICardProduct[], string>({
      query: category => `product/some-category/${category}`,
      providesTags: (arg) => [{ type: 'Product', category: arg }]
    }),
    getSomeProductsByType: builder.query<ICardProduct[], string>({
      query: typeProduct => `product/some-type/${typeProduct}`,
      providesTags: (arg) => [{ type: 'Product', typeProduct: arg }]
    }),
    getProduct: builder.query<IProduct, string>({
      query: id => `product/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Product', id: arg }]
    })
  }),
  overrideExisting: true
})

export const {
  useGetSomeNewProductsQuery,
  useGetAllProductsByCategoryQuery,
  useGetSomeProductsByCategoryQuery,
  useGetSomeProductsByTypeQuery,
  useGetProductQuery
} = productApi
