import React, { FC } from 'react'

import Image from 'next/image'

import removeElement from 'img/svg/close-icon.svg'

import styles from './FilterElementChecked.module.scss'

type Props = {
  elementChecked: string,
  onClick: (element: string) => void
}

export const FilterElementChecked: FC<Props> = ({ elementChecked, onClick }) => {
  const handleRemoveElement = () => {
    onClick(elementChecked)
  }

  return (
    <div className={styles.wrapper} onClick={handleRemoveElement}>
      {elementChecked}
      <Image src={removeElement} alt="delete" />
    </div>
  )
}
