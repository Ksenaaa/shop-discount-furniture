import React, { FC } from 'react'

import Image from 'next/image'

import arrow from 'img/svg/arrow-button.svg'

import styles from './Button.module.scss'

type Props = {
  name: string,
  onClick?: () => void
}

export const Button: FC<Props> = ({ name, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {name}
      <Image src={arrow} alt="arrow" />
    </div>
  )
}
