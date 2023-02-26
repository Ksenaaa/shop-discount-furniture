import React, { FC } from 'react'

import styles from './Button.module.scss'

type Props = {
  name: string,
  onClick?: () => void
}

export const Button: FC<Props> = ({ name, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {name}
    </div>
  )
}
