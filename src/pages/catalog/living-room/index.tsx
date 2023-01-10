import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

const LivingRoom = () => {
  return (
    <div className={styles.wrapper}>
      <h1>LivingRoom</h1>
    </div>
  )
}

export default LivingRoom

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
