import React, { FC, useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ICardNews } from 'interface/newsInterface'
import { Routes } from 'utils/constants/routes'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import styles from './MainNewsCard.module.scss'

type Props = {
  item: ICardNews
}

export const MainNewsCard: FC<Props> = ({ item }) => {
  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <Link
      href={`/${Routes.NEWS}/${item.id}`}
      className={styles.card}
    >
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
  )
}
