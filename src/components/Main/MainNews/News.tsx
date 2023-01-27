import React, { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useGetMainNewsQuery } from 'store/services/news'
import { Routes } from 'utils/constants/routes'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import styles from './News.module.scss'

export const News = () => {
  const { data: news } = useGetMainNewsQuery()

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <div className={styles.wrapper}>
      <Link href={`/${Routes.NEWS}`} className={styles.title}>
        News
      </Link>
      <ul className={styles.cards}>
        {news?.slice(-3).map(item =>
          <Link href="/" className={styles.card} key={item.id}>
            <div className={styles.picture}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item.img}`}
                alt="img"
                fill
                sizes="33vw"
                placeholder="blur"
                blurDataURL={getBlur(item.img)}
              />
            </div>
            <h2 className={styles.cardTitle}>
              {item.name}
            </h2>
          </Link>
        )}
      </ul>
    </div>
  )
}
