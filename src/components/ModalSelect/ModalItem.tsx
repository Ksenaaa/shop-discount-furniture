import React, { FC } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import arrowActive from 'img/svg/arrow-black-active.svg'
import arrow from 'img/svg/arrow-black.svg'

import styles from './ModalSelect.module.scss'

type Props = {
  item: string,
  activeItem: string | null,
  onClickItem: (item: string) => void,
  isIconVisible: boolean
}

export const ModalSelectItem: FC<Props> = ({ item, activeItem, onClickItem, isIconVisible }) => {
  const handleClick = () => onClickItem(item)

  return (
    <li
      className={cn(styles.modalItem, { [styles.activeItem]: activeItem === item })}
      onClick={handleClick}
    >
      {item}
      {isIconVisible && <Image src={activeItem !== item ? arrow : arrowActive} alt="arrow" />}
    </li>
  )
}
