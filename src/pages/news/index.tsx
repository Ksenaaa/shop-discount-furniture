import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import { useGetAllNewsQuery } from 'store/services/news'

import { MainNewsCard } from 'components/Main/MainNews/MainNewsCard'

import styles from './Index.module.scss'

const NewsPage = () => {
  const { data } = useGetAllNewsQuery({
    page: 1,
    limit: 0
  })

  return (
    <div className={styles.wrapper}>
      <ul className={styles.cards}>
        {data?.pageData?.map(item =>
          <MainNewsCard
            item={item}
            key={item.id}
          />
        )}
      </ul>
    </div>
  )
}

export default NewsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
