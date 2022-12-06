import React, { useState } from 'react'

import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MiddleHeader } from './MiddleHeader'
import { Burger } from './Burger'

import styles from './Header.module.scss'

export const Header = () => {
    const [menuBurgerActive, setMenuBurgerActive] = useState(false)

    const onClickBurger = () => {
        setMenuBurgerActive(preState => !preState)
    }

    return (
        <div className={styles.wrapper}>
            <Contacts />
            <MiddleHeader />
            <Menu />
            <div className={styles.burger_wrapper} onClick={onClickBurger}>
                <Burger isActiveMenu={menuBurgerActive} />
            </div>
            {menuBurgerActive && 
                <div className={styles.burger_menu}>
                    <Menu isActiveMenu={menuBurgerActive} />
                </div>
            }
        </div>
    )
}
