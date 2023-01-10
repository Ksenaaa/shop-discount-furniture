import React from 'react'

import { useToggle } from 'hooks/toggleHook'

import { Burger } from './Burger'
import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MiddleHeader } from './MiddleHeader'

import styles from './Header.module.scss'

export const Header = () => {
  const { isOpen: menuBurgerActive, onToggle: setMenuBurgerActive } = useToggle()

  return (
    <div className={styles.wrapper}>
      <Contacts />
      <MiddleHeader />
      <Menu />
      <div className={styles.burgerWrapper} onClick={setMenuBurgerActive}>
        <Burger isActiveMenu={menuBurgerActive} />
      </div>
      {menuBurgerActive &&
        <div className={styles.burgerMenu}>
          <Menu isActiveMenuBurger={menuBurgerActive} onClickItemMenu={setMenuBurgerActive} />
        </div>
      }
    </div>
  )
}
