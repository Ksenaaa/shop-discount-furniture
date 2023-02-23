import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetServerSidePropsContext } from 'next'

import { useGetProductQuery } from 'store/services/product'

import { Loader } from 'components/Loader'
import { ProductInfo } from 'components/ProductInfo'

import Error from 'pages/404'

const Product = ({ id }: { id: string }) => {
  const { data, isSuccess, isError } = useGetProductQuery(id)

  return (
    <>
      {!isSuccess ?
        <Loader /> :
        <ProductInfo product={data} />
      }
      {isError && <Error />}
    </>
  )
}

export default Product

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const category = context?.params?.category
  const id = context?.params?.id

  if (!id || !category) return { notFound: true }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
      id,
      category
    }
  }
}
