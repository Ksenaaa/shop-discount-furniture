import React, { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { LanguageName } from 'utils/constants/languages'

import styles from './Menu.module.scss'

type Props = {
  isActiveMenuBurger?: boolean;
  onClickItemMenu?: () => void;
}

type menuNameType = {
  id: string,
  name: string,
  path: string
}

export const Menu: FC<Props> = ({ isActiveMenuBurger, onClickItemMenu }) => {
  const { t, i18n } = useTranslation()

  const router = useRouter()

  const menuName = t('menu', { returnObjects: true }) as menuNameType[]

  return (
    <div className={cn(styles.wrapper, !isActiveMenuBurger ? styles.wrapperMenu : styles.wrapperActiveMenuBurger)}>
      <ul className={styles.menuList}>
        {Array.isArray(menuName) && menuName.map(item =>
          <li
            key={item.id}
            onClick={onClickItemMenu}
            className={cn(styles.menuItem, {
              [styles.menuItemUa]: i18n.language === LanguageName.UA,
              [styles.activeMenuItem]: router.pathname.split('/').includes(item.path)
            })}
          >
            <Link href={`/catalog/${item.path}`}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
