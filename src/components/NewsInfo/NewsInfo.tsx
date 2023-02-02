import React, { FC, useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import cn from 'classnames'

import arrow from 'img/svg/arrow-button.svg'
import { useGetAllNewsQuery, useGetOneNewsQuery } from 'store/services/news'
import { Routes } from 'utils/constants/routes'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import { Loader } from 'components/Loader'

import Error from 'pages/404'

import styles from './NewsInfo.module.scss'

type Props = {
  id: string
}

export const NewsInfo: FC<Props> = ({ id }) => {
  const { data: news, isLoading, isSuccess, isError } = useGetOneNewsQuery(id)
  const { data: allnews } = useGetAllNewsQuery()

  const indexItem = allnews?.findIndex(item => item.id === id) as number

  const previousId = useCallback(() => {
    if (!allnews?.length) return

    return indexItem === 0 ? allnews[allnews.length - 1].id : allnews[indexItem - 1]?.id
  }, [allnews, indexItem])

  const nextId = useCallback(() => {
    if (!allnews?.length) return

    return indexItem + 1 === allnews.length ? allnews[0].id : allnews[indexItem + 1]?.id
  }, [allnews, indexItem])

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess &&
        <>
          <div className={cn(styles.picture, styles.pictureTitle)}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${news?.pictures[1]}`}
              alt="img"
              fill
              priority
              placeholder="blur"
              blurDataURL={getBlur(news?.pictures[1] as string)}
            />
            <div className={styles.overlapPicture}></div>

            <div className={styles.descTitle}>
              <div className={styles.nameTitle}>
                {news?.name}
              </div>
              <div className={styles.textTitle}>
                {news?.text}
              </div>
            </div>

            <div className={styles.toggleItems}>
              <Link
                href={{
                  pathname: `/${Routes.NEWS}/[id]`,
                  query: { id: previousId() }
                }}
                className={styles.toggleItem}
              >
                <div className={styles.toggleItemText}>
                  Previous page
                </div>
                <Image src={arrow} alt="arrow" />
              </Link>
              <Link
                href={{
                  pathname: `/${Routes.NEWS}/[id]`,
                  query: { id: nextId() }
                }}
                className={styles.toggleItem}
              >
                <div className={styles.toggleItemText}>
                  Next page
                </div>
                <Image src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>

          <div className={styles.wrapperText}>
            <div className={styles.name}>
              {news?.name}
            </div>
            <div className={styles.text}>
              {news?.text}
            </div>
            <div className={cn(styles.picture, styles.pictureText)}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${news?.pictures[2]}`}
                alt="img"
                fill
                placeholder="blur"
                blurDataURL={getBlur(news?.pictures[2] as string)}
              />
            </div>
          </div>
        </>
      }
    </div>
  )
}
