import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import styles from './Index.module.scss'

const LivingRooms = () => {
  return (
    <div className={styles.wrapper}>
      <h1>LivingRooms</h1>
    </div>
  )
}

export default LivingRooms

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
