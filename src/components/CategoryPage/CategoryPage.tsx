import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { menuCategories } from 'utils/constants/menuCategories'

import styles from './CategoryPage.module.scss'

type Props = {
  category: string
}

export const CategoryPage: FC<Props> = ({ category }) => {
  const [hydrated, setHydrated] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  const categoryName = menuCategories.find(categoryData => categoryData.path === category)?.name || ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {t(categoryName)}
      </div>
    </div>
  )
}
