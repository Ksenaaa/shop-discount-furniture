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
    getProductsList: builder.query<IPageData<ICardProduct[]>, IParamsGetQuery>({
      query: ({ elementName, page, limit, filter, sort }) => ({
        url: `product/list/${elementName}`,
        params: {
          page,
          limit,
          filter,
          sort
        }
      }),
      providesTags: (arg) => [{ type: 'Product', elementName: arg }]
    }),
    getProductsByElement: builder.query<IPageData<ICardProduct[]>, IParamsGetQuery>({
      query: ({ element, elementName, page, limit }) => ({
        url: `product/${element}/${elementName}`,
        params: {
          element,
          elementName,
          page,
          limit
        }
      }),
      providesTags: (arg) => [{ type: 'Product', elements: arg }]
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
  useGetProductsListQuery,
  useGetProductsByElementQuery,
  useGetProductQuery
} = productApi
