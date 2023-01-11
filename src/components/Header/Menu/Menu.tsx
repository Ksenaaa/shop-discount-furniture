import React, { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { LanguageName } from 'utils/constants/languages'
import { routing } from 'utils/constants/routing'

import styles from './Menu.module.scss'

type Props = {
  isMenuBurgerActive?: boolean;
  onClick?: () => void;
}

type menuNameType = {
  id: string,
  name: string,
  path: string
}

export const Menu: FC<Props> = ({ isMenuBurgerActive, onClick }) => {
  const { t, i18n } = useTranslation()

  const router = useRouter()

  const menuName = t('menu', { returnObjects: true }) as menuNameType[]

  return (
    <div className={cn(styles.wrapper, !isMenuBurgerActive ? styles.wrapperMenu : styles.wrapperActiveMenuBurger)}>
      <ul className={styles.menuList}>
        {menuName?.map(item =>
          <li
            key={item.id}
            onClick={onClick}
            className={cn(styles.menuItem, {
              [styles.menuItemUa]: i18n.language === LanguageName.UA,
              [styles.activeMenuItem]: router.pathname.split('/').includes(item.path)
            })}
          >
            <Link href={`/${routing.CATALOG}/${item.path}`}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
