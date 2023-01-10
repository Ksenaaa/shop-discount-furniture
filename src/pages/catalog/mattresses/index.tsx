import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const Mattresses = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Mattresses</h1>
    </div>
  )
}

export default Mattresses

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
