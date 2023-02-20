import React, { FC, useCallback } from 'react'

import Image from 'next/image'

import { getBlurImage } from 'utils/helpers/getBlurImage'

import styles from './ColorCard.module.scss'

type Props = {
  img: string
}

export const ColorCard: FC<Props> = ({ img }) => {
  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <div className={styles.wrapper}>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
        alt="img"
        fill
        sizes="33vw"
        placeholder="blur"
        blurDataURL={getBlur(img)}
      />
    </div>
  )
}
