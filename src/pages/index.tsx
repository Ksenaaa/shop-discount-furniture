import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { GetStaticProps } from 'next'

import { Main } from 'components/Main'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Main />
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
