import React, { FC, useCallback } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import { getBlurImage } from 'utils/helpers/getBlurImage'

import styles from './OtherPicturesCard.module.scss'

type Props = {
  id: string,
  index: number
  onClickItem: (index: number) => void,
  indexMainPicture: number,
}

export const OtherPicturesCard: FC<Props> = ({ id, index, onClickItem, indexMainPicture }) => {
  const handlerClick = () => onClickItem(index)

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <div
      className={cn(styles.otherPicturesCard, { [styles.cardActive]: indexMainPicture === index })}
      onClick={handlerClick}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${id}`}
        alt="img"
        fill
        sizes="33vw"
        placeholder="blur"
        blurDataURL={getBlur(id)}
      />
    </div>
  )
}
