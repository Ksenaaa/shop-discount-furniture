import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import { ITestimonials } from 'interface/testimonialsInterface'
import { dateFormat } from 'utils/helpers/dateFormat'

import { Stars } from 'components/Main/Testimonials/Stars'

import { itemsMinHeight } from './constants/itemsMinHeight'

import styles from './TestimonialsCard.module.scss'

type Props = {
  item: ITestimonials
}

export const TestimonialsCard: FC<Props> = ({ item }) => {
  const [height, setHeight] = useState(0)

  const { isOpen, onToggle } = useToggle(true)

  const ref = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    onToggle()
  }, [onToggle])

  return (
    <div className={cn(styles.wrapper, isOpen && styles.readMore)} ref={ref}>
      <div className={styles.name}>
        {item.name}
      </div>
      <div className={styles.date}>
        {dateFormat(item.date)}
      </div>
      <div className={styles.stars}>
        <Stars quantityFull={item.stars}/>
      </div>
      <div className={styles.text}>
        {item.text}
      </div>
      {height > itemsMinHeight &&
        <div className={styles.more} onClick={onToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    </div>
  )
}
