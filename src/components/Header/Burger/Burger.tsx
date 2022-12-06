import React, { FC } from 'react'
import cn from 'classnames'

import styles from './Burger.module.scss'

type Props = {
    isActiveMenu: boolean;
}

export const Burger: FC<Props> = ({ isActiveMenu }) => {
    return (
        <div className={styles.burger}>
            <div className={cn(styles.burger_first_line, isActiveMenu && styles.burger_first_line_cross)}></div>
            <div className={cn(styles.burger_second_line, isActiveMenu && styles.burger_second_line_cross)}></div>
            <div className={cn(styles.burger_third_line, isActiveMenu && styles.burger_third_line_cross)}></div>
        </div>
    )
}
