import React, { FC } from 'react'

import cn from 'classnames'

import arrowActive from 'img/svg/arrow-black-active.svg'
import arrow from 'img/svg/arrow-black.svg'

import styles from './ModalWindow.module.scss'

type Props = {
    item: string,
    isActive: string,
    onClickItem: (item: string) => void,
    icon: boolean
}

export const ModalWindowItem: FC<Props> = ({ item, isActive, onClickItem, icon }) => {
    const onClick = () => onClickItem(item)

    return (
        <li
            className={cn(styles.modalItem, isActive === item && styles.isActive)}
            onClick={onClick}
        >
            {item}
            {icon && <img src={isActive !== item ? arrow : arrowActive} alt="arrow" />}
        </li>
    )
}
