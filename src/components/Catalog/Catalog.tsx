import React, { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { routes } from 'utils/constants/routes'

import styles from './Catalog.module.scss'

type Props = {
  onClick?: () => void;
  styleCatalog: string
}

type menuNameType = {
  id: string,
  name: string,
  path: string
}

export const Catalog: FC<Props> = ({ onClick, styleCatalog }) => {
  const { t } = useTranslation()

  const router = useRouter()

  const menuName = t('menu', { returnObjects: true }) as menuNameType[]

  return (
    <div className={styles[styleCatalog]}>
      <ul className={styles.list}>
        {menuName?.map(item =>
          <li
            key={item.id}
            className={cn(styles.item, {
              [styles.activeItem]: router.pathname.split('/').includes(item.path)
            })}
          >
            <Link href={`/${routes.CATALOG}/${item.path}`} onClick={onClick}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
