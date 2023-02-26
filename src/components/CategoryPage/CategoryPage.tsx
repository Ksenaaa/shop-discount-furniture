import React, { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { menuCategories } from 'utils/constants/menuCategories'

import styles from './CategoryPage.module.scss'

type Props = {
  category: string
}

export const CategoryPage: FC<Props> = ({ category }) => {
  const { t } = useTranslation()

  const categoryName = menuCategories.find(categoryData => categoryData.path === category)?.name || ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {t(categoryName)}
      </div>
    </div>
  )
}
