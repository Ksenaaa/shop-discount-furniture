import React from 'react'

import { useToggle } from 'hooks/toggleHook'

import { Burger } from './Burger'
import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MiddleHeader } from './MiddleHeader'

import styles from './Header.module.scss'

export const Header = () => {
  const { isOpen: isMenuBurgerActive, onToggle: toggleMenuBurgerActive } = useToggle()

  return (
    <div className={styles.wrapper}>
      <Contacts />
      <MiddleHeader />
      <Menu />
      <div className={styles.burgerWrapper} onClick={toggleMenuBurgerActive}>
        <Burger isActiveMenu={isMenuBurgerActive} />
      </div>
      {isMenuBurgerActive &&
        <div className={styles.burgerMenu}>
          <Menu isMenuBurgerActive={isMenuBurgerActive} onClick={toggleMenuBurgerActive} />
        </div>
      }
    </div>
  )
}
