import React, { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { menuCategories } from 'utils/constants/menuCategories'
import { Routes } from 'utils/constants/routes'

import styles from './Catalog.module.scss'

type Props = {
  onClick?: () => void;
  styleCatalog: string
}

export const Catalog: FC<Props> = ({ onClick, styleCatalog }) => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <div className={styles[styleCatalog]}>
      <ul className={styles.list}>
        {menuCategories.map(item =>
          <li
            key={item.id}
            className={cn(styles.item, {
              [styles.activeItem]: router.asPath.split('/').includes(item.path)
            })}
          >
            <Link href={`/${Routes.CATALOG}/${item.path}`} onClick={onClick}>{t(item.name)}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
