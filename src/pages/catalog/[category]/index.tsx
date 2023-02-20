import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetServerSidePropsContext } from 'next'

import { CategoryPage } from 'components/CategoryPage'

const Category = ({ category }: { category: string }) => {
  return (
    <CategoryPage category={category} />
  )
}

export default Category

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const category = context?.params?.category

  if (!category) return { notFound: true }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
      category
    }
  }
}
