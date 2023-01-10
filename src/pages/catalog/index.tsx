import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Catalog</h1>
      <div>Kids</div>
      <div>Living</div>
      <div>Badroom</div>
      <div>cdcd</div>
      <div>cdcd</div>
    </div>
  )
}

export default Catalog

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
