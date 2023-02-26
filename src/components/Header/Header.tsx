import React from 'react'

import { useToggle } from 'hooks/toggleHook'
import { CatalogStyles } from 'utils/constants/catalogStyles'

import { Catalog } from 'components/Catalog'

import { Burger } from './Burger'
import { MiddleHeader } from './MiddleHeader'
import { TopHeader } from './TopHeader'

import styles from './Header.module.scss'

export const Header = () => {
  const { isOpen: isMenuBurgerActive, onToggle: toggleMenuBurgerActive } = useToggle()

  return (
    <div className={styles.wrapper}>
      <TopHeader />
      <Catalog styleCatalog={CatalogStyles.WRAPPER_MENU} />
      <div className={styles.burgerWrapper} onClick={toggleMenuBurgerActive}>
        <Burger isActiveMenu={isMenuBurgerActive} />
      </div>
      <MiddleHeader />
      {isMenuBurgerActive &&
        <div className={styles.burgerMenu}>
          <Catalog onClick={toggleMenuBurgerActive} styleCatalog={CatalogStyles.WRAPPER_MENU_BURGER} />
        </div>
      }
    </div>
  )
}
