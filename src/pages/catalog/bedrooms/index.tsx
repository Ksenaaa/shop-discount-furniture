import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const Bedrooms = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Bedrooms</h1>
    </div>
  )
}

export default Bedrooms

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
