import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const DecorMore = () => {
  return (
    <div className={styles.wrapper}>
      <h1>DecorMore</h1>
    </div>
  )
}

export default DecorMore

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
