import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

export const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Testimonials</h1>
    </div>
  )
}

export default Testimonials

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
