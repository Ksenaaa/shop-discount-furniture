import React from 'react'

import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import { benefitsCards } from './constants/benefitsCards'

import styles from './Benefits.module.scss'

export const Benefits = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.benefits}>
        {benefitsCards.map(item =>
          <div className={styles.card} key={item.id}>
            <Image src={item.img} alt={item.id} className={styles.picture} />
            <h2 className={styles.title}>
              {t(item.text)}
            </h2>
            <div className={styles.separator} />
          </div>
        )}
      </div>
    </div>
  )
}
