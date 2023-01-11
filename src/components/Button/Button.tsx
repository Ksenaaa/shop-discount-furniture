import React, { FC } from 'react'

import Image from 'next/image'

import arrow from 'img/svg/arrow-button.svg'

import styles from './Button.module.scss'

type Props = {
  name: string,
}

export const Button: FC<Props> = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      {name}
      <Image src={arrow} alt="arrow" />
    </div>
  )
}
