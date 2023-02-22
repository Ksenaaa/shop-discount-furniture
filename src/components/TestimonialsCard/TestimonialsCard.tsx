import React, { FC, useEffect } from 'react'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import { ITestimonials } from 'interface/testimonialsInterface'
import { dateFormat } from 'utils/helpers/dateFormat'

import { Stars } from 'components/Main/Testimonials/Stars'
import { MoreInformation } from 'components/MoreInformation'

import { testimonialMinHeight } from './constants/testimonialMinHeight'

import styles from './TestimonialsCard.module.scss'

type Props = {
  item: ITestimonials
}

export const TestimonialsCard: FC<Props> = ({ item }) => {
  const { isOpen, onToggle } = useToggle(true)

  useEffect(() => {
    onToggle()
  }, [item, onToggle])

  return (
    <div className={styles.wrapper}>
      <MoreInformation minHeight={testimonialMinHeight} onToggle={onToggle}>
        <div className={styles.name}>
          {item.name}
        </div>
        <div className={styles.date}>
          {dateFormat(item.date)}
        </div>
        <div className={styles.stars}>
          <Stars quantityFull={item.stars}/>
        </div>
        <div className={cn(styles.text, isOpen && styles.textReadMore)}>
          {item.text}
        </div>
      </MoreInformation>
    </div>
  )
}
