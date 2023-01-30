import React, { FC } from 'react'

import Image from 'next/image'

import empty from 'img/svg/star-empty.svg'
import full from 'img/svg/star-full.svg'

import styles from './Stars.module.scss'

type Props = {
  quantityFull: number
}

export const Stars: FC<Props> = ({ quantityFull }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={quantityFull < 1 ? empty : full} alt="star" />
      <Image src={quantityFull < 2 ? empty : full} alt="star" />
      <Image src={quantityFull < 3 ? empty : full} alt="star" />
      <Image src={quantityFull < 4 ? empty : full} alt="star" />
      <Image src={quantityFull < 5 ? empty : full} alt="star" />
    </div>
  )
}
