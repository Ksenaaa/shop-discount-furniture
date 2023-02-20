import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetServerSidePropsContext } from 'next'

import { ProductInfo } from 'components/ProductInfo'

const Product = ({ id }: { id: string }) => {
  return (
    <ProductInfo id={id} />
  )
}

export default Product

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context?.params?.id

  if (!id) return { notFound: true }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
      id
    }
  }
}
