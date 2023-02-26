import React, { FC } from 'react'

import Image from 'next/image'

import address from 'img/svg/address-icon.svg'

import styles from './MapMarker.module.scss'

type Props = {
  text: string,
  lat: number,
  lng: number
}

export const MapMarker: FC<Props> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={address} alt="home" className={styles.picture} priority />
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}
