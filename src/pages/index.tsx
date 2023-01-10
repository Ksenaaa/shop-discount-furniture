import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { GetStaticProps } from 'next'

import { Slider } from 'components/Slider'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Slider />
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
