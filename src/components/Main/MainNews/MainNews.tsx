import React from 'react'

import Link from 'next/link'

import { useGetMainNewsQuery } from 'store/services/news'
import { Routes } from 'utils/constants/routes'

import { MainNewsCard } from './MainNewsCard'

import styles from './MainNews.module.scss'

export const MainNews = () => {
  const { data: news } = useGetMainNewsQuery()

  return (
    <div className={styles.wrapper}>
      <Link href={`/${Routes.NEWS}`} className={styles.title}>
        News
      </Link>
      <ul className={styles.cards}>
        {news?.map(item =>
          <MainNewsCard
            item={item}
            key={item.id}
          />
        )}
      </ul>
    </div>
  )
}
