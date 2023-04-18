import React, { FC } from 'react'

import Image from 'next/image'

import removeElement from 'img/svg/close-icon.svg'

import styles from './FilterElementChecked.module.scss'

type Props = {
  elementName: string,
  onClick: (name: string) => void
}

export const FilterElementChecked: FC<Props> = ({ elementName, onClick }) => {
  const handleRemoveElement = () => {
    onClick(elementName)
  }

  return (
    <div className={styles.wrapper} onClick={handleRemoveElement}>
      {elementName}
      <Image src={removeElement} alt="delete" />
    </div>
  )
}
