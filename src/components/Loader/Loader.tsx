import React from 'react'

import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.wrapperLoader}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
