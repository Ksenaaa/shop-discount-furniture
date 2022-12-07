import React, { FC } from 'react'
import cn from 'classnames'

import styles from './Burger.module.scss'

type Props = {
    isActiveMenu: boolean;
}

export const Burger: FC<Props> = ({ isActiveMenu }) => {
    return (
        <div className={styles.burger}>
            <div className={cn(styles.burgerFirstLine, isActiveMenu && styles.burgerFirstLineCross)}></div>
            <div className={cn(styles.burgerSecondLine, isActiveMenu && styles.burgerSecondLineCross)}></div>
            <div className={cn(styles.burgerThirdLine, isActiveMenu && styles.burgerThirdLineCross)}></div>
        </div>
    )
}
