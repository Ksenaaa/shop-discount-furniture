import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { titleName } from 'utils/constants/titleName'

import { Button } from 'components/Button'
import { Title } from 'components/Title'

import styles from './Sale.module.scss'

export const Sale = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const handleGoToCategory = useCallback(() => {
    router.push(`/${titleName.mainCatalog.path}`)
  }, [router])

  return (
    <div className={styles.wrapper}>
      <Title name={titleName.sale.name} pathTitle={titleName.sale.path} />
      <div className={styles.card}>
        <div className={styles.text}>
          {t('sale.text')}
        </div>
        <div className={styles.button}>
          <Button name={t('sale.button')} onClick={handleGoToCategory} />
        </div>
      </div>
    </div>
  )
}
