import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import addressIcon from 'img/svg/address-icon.svg'
import callIcon from 'img/svg/call-icon.svg'
import facebookIcon from 'img/svg/facebook.svg'
import instagramIcon from 'img/svg/instagram.svg'
import logoName from 'img/svg/logo-name.svg'
import logoIcon from 'img/svg/logo.svg'
import { CatalogStyles } from 'utils/constants/catalogStyles'
import { titleName } from 'utils/constants/titleName'

import { Catalog } from 'components/Catalog'

import styles from './Footer.module.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>

        <div className={styles.sections}>
          <div className={styles.contacts}>
            <div className={styles.call}>
              <Image src={callIcon} alt="call" />
              <p className={styles.callText}>
                {t('contacts.call')}
              </p>
            </div>

            <div className={styles.address}>
              <Image src={addressIcon} alt="address" />
              <p className={styles.addressText}>
                {t('contacts.address')}
              </p>
            </div>

            <div className={styles.social}>
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

          <div className={styles.pages}>
            <div className={styles.categorySection}>
              <div className={styles.title}>
                {t(titleName.mainCatalog.name)}
              </div>
              <div className={styles.wrapperCatalog}>
                <Catalog styleCatalog={CatalogStyles.WRAPPER_FOOTER} />
              </div>
            </div>
            <div className={styles.otherSection}>
              <div className={styles.item}>{t(titleName.sale.name)}</div>
              <div className={styles.item}>{t(titleName.news.name)}</div>
              <div className={styles.item}>{t(titleName.newArrivals.name)}</div>
              <div className={styles.item}>{t(titleName.testimonials.name)}</div>
              <div className={styles.item}>{t('dailySalesSignup.name')}</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoIcon} alt="furniture f" priority />
              <Image src={logoName} alt="furniture f" priority />
            </Link>
          </div>
          <div className={styles.nameSite}>Furniture F</div>
          <div className={styles.yearWork}>© 2023</div>
        </div>
      </div>
    </div>
  )
}
