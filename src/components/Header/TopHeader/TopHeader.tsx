import React, { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import basketIcon from 'img/svg/basket.svg'
import facebookIcon from 'img/svg/facebook.svg'
import instagramIcon from 'img/svg/instagram.svg'
import likeIcon from 'img/svg/like-empty.svg'
import logoIcon from 'img/svg/logo.svg'

import { ModalSelect } from 'components/ModalSelect'

import { Search } from '../Search'

import styles from './TopHeader.module.scss'

export const TopHeader = () => {
  const { isOpen: isOpenModalLanguage, onToggle: toggleModalLanguage } = useToggle()
  const { isOpen: isSearchActive, onToggle: toggleSearchActive } = useToggle()

  const { locale, locales, push, pathname, query, asPath } = useRouter()

  const changeLanguage = useCallback((lng: string) =>
    push({ pathname, query }, asPath, { locale: lng, scroll: false })
  , [push, pathname, query, asPath])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logoIcon} alt="furniture f" priority />
          </Link>
        </div>

        <div className={cn(styles.search, isSearchActive && styles.searchActive)}>
          <Search onClick={toggleSearchActive}/>
        </div>

        <div className={styles.social}>
          <Link href="https://www.facebook.com/" className={styles.facebookLogo}>
            <Image src={facebookIcon} alt="facebook"/>
          </Link>
          <Link href="https://www.instagram.com/" className={styles.instagramLogo}>
            <Image src={instagramIcon} alt="instagram" />
          </Link>
        </div>

        <div className={styles.userGoods}>
          <Link href="/" className={styles.like}>
            <Image src={likeIcon} alt="like"/>
          </Link>
          <Link href="/" className={styles.basket}>
            <Image src={basketIcon} alt="basket" />
          </Link>
        </div>

        <div className={styles.wrapperLanguage}>
          <div className={styles.language} onClick={toggleModalLanguage}>
            {locale}
          </div>
          {isOpenModalLanguage && locales && locale &&
            <ModalSelect
              modalList={locales}
              activeItem={locale}
              onChangeItem={changeLanguage}
              onToggleModal={toggleModalLanguage}
              isIconVisible={false}
            />
          }
        </div>
      </div>
    </div>
  )
}
