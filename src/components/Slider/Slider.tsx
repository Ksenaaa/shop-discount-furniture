import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import { Loader } from 'components/Loader'

import styles from './Slider.module.scss'

type Props = {
  picturesLength: number,
  speed?: number,
  column: number,
  isLoading?: boolean,
  isAutoCarousel: boolean,
  isSwipe: boolean,
  children: ReactNode,
  swipeLeftImg?: string,
  swipeRightImg?: string,
  stylesSwipeWrapper?: string
}

export const Slider: FC<Props> = ({
  picturesLength,
  speed,
  column,
  isLoading,
  isAutoCarousel,
  isSwipe,
  children,
  swipeLeftImg = '',
  swipeRightImg = '',
  stylesSwipeWrapper
}) => {
  const [visibleSlide, setVisibleSlide] = useState<number>(0)

  const onSwipeLeft = useCallback(() => {
    if (!picturesLength) return

    setVisibleSlide(preState => preState === 0 ? picturesLength - 1 : preState - 1)
  }, [picturesLength])

  const onSwipeRight = useCallback(() => {
    if (!picturesLength) return

    setVisibleSlide(preState => picturesLength - 1 === preState ? 0 : preState + 1)
  }, [picturesLength])

  useEffect(() => {
    if (isAutoCarousel) {
      if (!picturesLength) return

      const timeoutId = setInterval(() => setVisibleSlide(preState =>
        picturesLength - 1 === preState ? 0 : preState + 1), speed)

      return () => clearInterval(timeoutId)
    }
  }, [picturesLength, visibleSlide, isAutoCarousel, speed])

  return (
    <>
      {isSwipe &&
        <div className={stylesSwipeWrapper}>
          <Image src={swipeLeftImg} alt="swipeLeft" onClick={onSwipeLeft} />
          <Image src={swipeRightImg} alt="swipeRight" onClick={onSwipeRight} />
        </div>
      }
      <div className={styles.wrapper}>
        {isLoading ?
          <Loader /> :
          <div className={styles.containerSlider} style={{ transform: `translateX(${-visibleSlide * 100 / column}%)` }}>
            {children}
          </div>
        }
      </div>
    </>
  )
}
