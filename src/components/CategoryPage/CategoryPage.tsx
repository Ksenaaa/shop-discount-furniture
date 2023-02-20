import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IMenuName } from 'interface/catalogInterface'

import styles from './CategoryPage.module.scss'

type Props = {
  category: string
}

export const CategoryPage: FC<Props> = ({ category }) => {
  const { t } = useTranslation()

  const categories = t('menu', { returnObjects: true }) as IMenuName[]

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {categories?.find(item => item.path === category)?.name}
      </div>
    </div>
  )
}
