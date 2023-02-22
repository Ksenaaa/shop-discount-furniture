import React, { MutableRefObject, PropsWithChildren, useRef } from 'react'

import styles from './MoreInformation.module.scss'

type Props = {
  minHeight: number,
  onToggle: () => void,
}

export const MoreInformation = ({ minHeight, onToggle, children }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>

  const height = ref?.current?.clientHeight || 0

  return (
    <div className={styles.wrapperMore} ref={ref}>
      {children}
      {height > minHeight &&
        <div className={styles.more} onClick={onToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    </div>
  )
}
