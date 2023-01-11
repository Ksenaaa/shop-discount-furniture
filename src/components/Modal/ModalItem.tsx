import React, { FC } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import arrowActive from 'img/svg/arrow-black-active.svg'
import arrow from 'img/svg/arrow-black.svg'

import styles from './Modal.module.scss'

type Props = {
  item: string,
  activeItem: string,
  onClickItem: (item: string) => void,
  isIconVisible: boolean
}

export const ModalItem: FC<Props> = ({ item, activeItem, onClickItem, isIconVisible }) => {
  const handlerClick = () => onClickItem(item)

  return (
    <li
      className={cn(styles.modalItem, { [styles.activeItem]: activeItem === item })}
      onClick={handlerClick}
    >
      {item}
      {isIconVisible && <Image src={activeItem !== item ? arrow : arrowActive} alt="arrow" />}
    </li>
  )
}
