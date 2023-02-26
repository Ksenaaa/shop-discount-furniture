import React from 'react'

import { useGetMainNewsQuery } from 'store/services/news'
import { titleName } from 'utils/constants/titleName'

import { Title } from 'components/Title'

import { MainNewsCard } from './MainNewsCard'

import styles from './MainNews.module.scss'

export const MainNews = () => {
  const { data: news } = useGetMainNewsQuery()

  return (
    <div className={styles.wrapper}>
      <Title name={titleName.news.name} pathTitle={`/${titleName.news.path}`} />
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
