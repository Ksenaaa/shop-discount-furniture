import React, { MutableRefObject, PropsWithChildren, useEffect, useRef, useState } from 'react'

import styles from './MoreInformation.module.scss'

type Props = {
  minHeight: number,
  onToggle: () => void
}

export const MoreInformation = ({ minHeight, onToggle, children }: PropsWithChildren<Props>) => {
  const [height, setHeight] = useState(0)

  const ref = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    onToggle()
  }, [onToggle])

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
