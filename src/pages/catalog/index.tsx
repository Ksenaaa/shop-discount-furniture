import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import { MainCatalog } from 'components/Main/MainCatalog'

export const Catalog = () => {
  return (
    <MainCatalog />
  )
}

export default Catalog

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
