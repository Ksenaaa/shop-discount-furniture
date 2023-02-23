import React, { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import { useGetMainCatalogImgsQuery } from 'store/services/mainCatalog'
import { menuCategories } from 'utils/constants/menuCategories'
import { Routes } from 'utils/constants/routes'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import styles from './MainCatalog.module.scss'

export const MainCatalog = () => {
  const { data: catalogPictures } = useGetMainCatalogImgsQuery()
  const { t } = useTranslation()

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <ul className={styles.cards}>
      {menuCategories.map(item =>
        <Link href={`/${Routes.CATALOG}/${item.path}`} key={item.id} className={styles.card}>
          {catalogPictures?.map(picture =>
            picture.name === item.id &&
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${picture.img}`}
                alt={picture.name}
                key={picture.id}
                className={styles.picture}
                priority
                fill
                sizes="25vw"
                placeholder="blur"
                blurDataURL={getBlur(picture.img)}
              />
          )}
          <div className={styles.overlapPicture}></div>
          <h2 className={styles.title}>
            {t(item.name)}
          </h2>
        </Link>
      )}
    </ul>
  )
}
