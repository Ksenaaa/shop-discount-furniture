import React from 'react'

import { menuName } from 'constants/menuName'

import styles from './Menu.module.scss'

export const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <ol className={styles.menu_list}>
                {menuName.map(item =>
                    <li key={item.id} className={styles.menu_item}>
                        <a href={`/${item.id}`}>{item.name}</a> 
                    </li>
                )}
            </ol>
        </div>
    )
}
