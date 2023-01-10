import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import cn from 'classnames'

import orangeBasketIcon from 'img/svg/basket-icon-orange.svg'
import basketIcon from 'img/svg/basket-icon.svg'
import orangeHeartIcon from 'img/svg/heart-icon-orange.svg'
import heartIcon from 'img/svg/heart-icon.svg'
import logoName from 'img/svg/logo-name.svg'
import logoIcon from 'img/svg/logo.svg'

import { Search } from '../Search'

import styles from './MiddleHeader.module.scss'

export const MiddleHeader = () => {
  const [activeSearch, setActiveSearch] = useState(false)

  const onActiveSearch = () => {
    setActiveSearch(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logoIcon} alt="furniture f" priority />
          <Image src={logoName} alt="furniture f" priority />
        </Link>
      </div>
      <div className={cn(styles.search, activeSearch && styles.searchActive)} onClick={onActiveSearch}>
        <Search />
      </div>
      <div className={styles.selectedUser}>
        <div className={styles.heart}>
          <Image src={heartIcon} alt="heart" className={styles.blueHeart}/>
          <Image src={orangeHeartIcon} alt="heart" className={styles.orangeHeart}/>
        </div>
        <div className={styles.basket}>
          <Image src={basketIcon} alt="basket" className={styles.blueBasket}/>
          <Image src={orangeBasketIcon} alt="basket" className={styles.orangeBasket}/>
        </div>
      </div>
    </div>
  )
}
