import React, { PropsWithChildren } from 'react'

import styles from './CommonSliderItem.module.scss'

export const CommonSliderItem = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}
