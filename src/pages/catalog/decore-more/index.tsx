import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const DecoreMore = () => {
  return (
    <div className={styles.wrapper}>
      <h1>DecoreMore</h1>
    </div>
  )
}

export default DecoreMore

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
