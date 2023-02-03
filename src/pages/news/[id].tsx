import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetServerSidePropsContext } from 'next'

import { NewsInfo } from 'components/NewsInfo/NewsInfo'

import styles from './Index.module.scss'

const OneNews = ({ id }: { id: string }) => {
  return (
    <div className={styles.wrapper}>
      <NewsInfo id={id} />
    </div>
  )
}

export default OneNews

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context?.params?.id

  if (!id) return { notFound: true }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
      id
    }
  }
}
