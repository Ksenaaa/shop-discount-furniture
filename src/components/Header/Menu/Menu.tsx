import React, { FC } from 'react'

import cn from 'classnames'

import { menuName } from 'utils/constants/menuName'

import styles from './Menu.module.scss'

type Props = {
    isActiveMenu?: boolean;
}

export const Menu: FC<Props> = ({ isActiveMenu }) => {
    return (
        <div className={cn(styles.wrapper, !isActiveMenu ? styles.wrapperMenu : styles.wrapperActiveMenu)}>
            <ol className={styles.menuList}>
                {menuName.map(item =>
                    <li key={item.id} className={styles.menuItem}>
                        <a href={`/${item.id}`}>{item.name}</a>
                    </li>
                )}
            </ol>
        </div>
    )
}
