import React, { FC } from 'react'

import styles from './Checkbox.module.scss'

type Props = {
  type: string,
  labelName: string,
  radioName: string,
  value: number,
  defaultChecked?: boolean
}

export const Checkbox: FC<Props> = ({ type, labelName, radioName, value, defaultChecked }) => {
  return (
    <label id={labelName} className={styles.wrapper}>
      <input type={type} name={radioName} id={labelName} value={value} defaultChecked={defaultChecked} />
      <span className={styles.checkmark} />
      {labelName}
    </label>
  )
}
