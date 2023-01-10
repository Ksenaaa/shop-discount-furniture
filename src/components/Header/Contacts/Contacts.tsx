import React, { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { useToggle } from 'hooks/toggleHook'
import adressIcon from 'img/svg/adress-icon.svg'
import callIcon from 'img/svg/call-icon.svg'
import facebookIcon from 'img/svg/facebook-icon.svg'
import instagramIcon from 'img/svg/instagram-icon.svg'
import timeIcon from 'img/svg/time-icon.svg'

import { ModalWindow } from 'components/ModalWindow'

import styles from './Contacts.module.scss'

export const Contacts = () => {
  const { isOpen: isOpenModalLanguage, onToggle: onToggleModalLanguage } = useToggle()

  const { t } = useTranslation()

  const { locale, locales, push, pathname, query, asPath } = useRouter()

  const changeLanguage = useCallback((lng: string) =>
    push({ pathname, query }, asPath, { locale: lng, scroll: false })
  , [push, pathname, query, asPath])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.info}>
          <div className={styles.adress}>
            <Image src={adressIcon} alt="adress" />
            <p className={styles.adressText}>
              {t('contacts.adress')}
            </p>
          </div>
          <div className={styles.call}>
            <Image src={callIcon} alt="call" />
            <p className={styles.callText}>
              +4(477) 000 8282
            </p>
          </div>
          <div className={styles.time}>
            <Image src={timeIcon} alt="time" />
            <p className={styles.timeText}>
              {t('contacts.workingTime')}
            </p>
          </div>
        </div>

        <div className={styles.social}>
          <div className={styles.wrapperLanguage}>
            <div className={styles.language} onClick={onToggleModalLanguage}>
              {locale}
            </div>
            {isOpenModalLanguage && locales && locale &&
              <ModalWindow
                modalList={locales}
                isActive={locale}
                onChangeItem={changeLanguage}
                onToggleModal={onToggleModalLanguage}
                icon={false}
              />
            }
          </div>
          <div className={styles.facebookLogo}>
            <Link href="https://www.facebook.com/">
              <Image src={facebookIcon} alt="facebook"/>
            </Link>
          </div>
          <div className={styles.instagramLogo}>
            <Link href="https://www.instagram.com/">
              <Image src={instagramIcon} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
