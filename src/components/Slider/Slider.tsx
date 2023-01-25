import React, { FC, ReactNode, useEffect, useState } from 'react'

import { sliderSwipe } from 'utils/constants/sliderSwipe'

import { Loader } from 'components/Loader'

import styles from './Slider.module.scss'

type Props = {
  picturesLength?: number,
  speed?: number,
  column: number,
  isLoading?: boolean,
  isAutoCarousel: boolean,
  swipe: string,
  children: ReactNode
}

export const Slider: FC<Props> = ({
  picturesLength,
  speed,
  column,
  isLoading,
  isAutoCarousel,
  swipe,
  children
}) => {
  const [visibleSlide, setVisibleSlide] = useState<number>(0)

  useEffect(() => {
    if (!picturesLength) return

    if (swipe === sliderSwipe.LEFT) {
      setVisibleSlide(preState => preState === 0 ? picturesLength - 1 : preState - 1)
    } else if (swipe === sliderSwipe.RIGHT) {
      setVisibleSlide(preState => picturesLength - 1 === preState ? 0 : preState + 1)
    }
  }, [picturesLength, swipe])

  useEffect(() => {
    if (isAutoCarousel) {
      if (!picturesLength) return

      const timeoutId = setInterval(() => setVisibleSlide(preState =>
        picturesLength - 1 === preState ? 0 : preState + 1), speed)

      return () => clearInterval(timeoutId)
    }
  }, [picturesLength, visibleSlide, isAutoCarousel, speed])

  return (
    <div className={styles.wrapper}>
      {isLoading ?
        <Loader /> :
        <div className={styles.containerSlider} style={{ transform: `translateX(${-visibleSlide * 100 / column}%)` }}>
          {children}
        </div>
      }
    </div>
  )
}
