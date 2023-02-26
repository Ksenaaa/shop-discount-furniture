import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import addressIcon from 'img/svg/address-icon.svg'
import basketIcon from 'img/svg/basket.svg'
import callIcon from 'img/svg/call-icon.svg'
import likeIcon from 'img/svg/like-empty.svg'
import logoName from 'img/svg/logo-name.svg'
import logoIcon from 'img/svg/logo.svg'
import timeIcon from 'img/svg/time-icon.svg'

import styles from './MiddleHeader.module.scss'

export const MiddleHeader = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logoIcon} alt="furniture f" priority />
          <Image src={logoName} alt="furniture f" priority />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.address}>
          <Image src={addressIcon} alt="address" />
          <p className={styles.addressText}>
            {t('contacts.address')}
          </p>
        </div>
        <div className={styles.call}>
          <Image src={callIcon} alt="call" />
          <p className={styles.callText}>
            {t('contacts.call')}
          </p>
        </div>
        <div className={styles.time}>
          <Image src={timeIcon} alt="time" />
          <p className={styles.timeText}>
            {t('contacts.workingTime')}
          </p>
        </div>
      </div>

      <div className={styles.selectedUser}>
        <Link href="/" className={styles.like}>
          <Image src={likeIcon} alt="like" />
        </Link>
        <Link href="/" className={styles.basket}>
          <Image src={basketIcon} alt="basket" />
        </Link>
      </div>
    </div>
  )
}
