import { IPageData } from 'interface/pageDataInterface'
import { IParamsGetQuery } from 'interface/paramsGetQueryInterface'
import { ICardProduct, IProduct } from 'interface/productInterface'

import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNewProducts: builder.query<ICardProduct[], void>({
      query: () => 'product/new',
      providesTags: () => [{ type: 'Product' }]
    }),
    getProductsByCategory: builder.query<IPageData<ICardProduct[]>, IParamsGetQuery>({
      query: ({ key, page, limit }) => ({
        url: `product/category/${key}`,
        params: {
          page,
          limit
        }
      }),
      providesTags: (arg) => [{ type: 'Product', category: arg }]
    }),
    getProductsByType: builder.query<IPageData<ICardProduct[]>, IParamsGetQuery>({
      query: ({ key, page, limit }) => ({
        url: `product/type/${key}`,
        params: {
          page,
          limit
        }
      }),
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
  useGetNewProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByTypeQuery,
  useGetProductQuery
} = productApi
