import React, { FC } from 'react'

import { menuName } from 'constants/menuName'

import styles from './Menu.module.scss'

type Props = {
    isActiveMenu?: boolean;
}

export const Menu:FC<Props> = ({ isActiveMenu }) => {
    return (
        <div className={!isActiveMenu ? styles.wrapper : styles.wrapper_active_menu}>
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
