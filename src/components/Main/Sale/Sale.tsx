import React from 'react'

import { useTranslation } from 'next-i18next'

import { titleName } from 'utils/constants/titleName'

import { Button } from 'components/Button'
import { Title } from 'components/Title'

import styles from './Sale.module.scss'

export const Sale = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <Title name={titleName.sale.name} pathTitle={titleName.sale.path} />
      <div className={styles.card}>
        <div className={styles.text}>
          {t('sale.text')}
        </div>
        <div className={styles.button}>
          <Button name={t('sale.button')} />
        </div>
      </div>
    </div>
  )
}
