import React, { FC } from 'react'

import Image from 'next/image'

import checkboxIcon from 'img/svg/checkbox.svg'

import styles from './Checkbox.module.scss'

type Props = {
  type: string,
  labelName: string,
  radioName: string,
  value: number,
  defaultChecked?: boolean,
  checked: boolean
}

export const Checkbox: FC<Props> = ({ type, labelName, radioName, value, defaultChecked, checked }) => {
  return (
    <label id={labelName} className={styles.wrapper}>
      <input type={type} name={radioName} id={labelName} value={value} defaultChecked={defaultChecked} />
      {checked ?
        <Image src={checkboxIcon} alt="checkbox" className={styles.checkmarkActive} /> :
        <span className={styles.checkmark} />
      }
      {labelName}
    </label>
  )
}
