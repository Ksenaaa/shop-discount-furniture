import React from 'react'

import { Contacts } from './Contacts'
import { Menu } from './Menu'
import { MiddleHeader } from './MiddleHeader'

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Contacts />
            <MiddleHeader />
            <Menu />
        </div>
    )
}
