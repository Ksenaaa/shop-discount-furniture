import React, { useState } from 'react'

import { Burger } from './Burger'
import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MiddleHeader } from './MiddleHeader'

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
            <div className={styles.burgerWrapper} onClick={onClickBurger}>
                <Burger isActiveMenu={menuBurgerActive} />
            </div>
            {menuBurgerActive &&
                <div className={styles.burgerMenu}>
                    <Menu isActiveMenu={menuBurgerActive} />
                </div>
            }
        </div>
    )
}
