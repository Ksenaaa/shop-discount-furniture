import React, { FC } from 'react'

import cn from 'classnames'

import styles from './Button.module.scss'

type Props = {
  name: string,
  onClick: () => void,
  isDisabled?: boolean
}

export const Button: FC<Props> = ({ name, onClick, isDisabled }) => {
  const handleClick = () => {
    if (isDisabled) return

    return onClick()
  }

  return (
    <div className={cn(styles.wrapper, isDisabled && styles.disabled)} onClick={handleClick}>
      {name}
    </div>
  )
}
