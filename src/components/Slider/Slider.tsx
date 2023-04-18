import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import { AxisScroll } from 'utils/constants/axisScroll'

import { Loader } from 'components/Loader'

type Props = {
  picturesLength: number,
  speed?: number,
  column: number,
  isLoading?: boolean,
  isAutoCarousel: boolean,
  isSwipe: boolean,
  axisScroll: AxisScroll,
  swipeLeftImg?: string,
  swipeRightImg?: string,
  stylesSwipeWrapper?: string,
  stylesContainerSlider?: string,
  stylesWrapperSlider?: string
}

export const Slider = ({
  picturesLength,
  speed,
  column,
  isLoading,
  isAutoCarousel,
  isSwipe,
  axisScroll,
  children,
  swipeLeftImg = '',
  swipeRightImg = '',
  stylesSwipeWrapper,
  stylesContainerSlider,
  stylesWrapperSlider
}: PropsWithChildren<Props>) => {
  const [visibleSlide, setVisibleSlide] = useState<number>(0)

  const onSwipeLeft = useCallback(() => {
    if (!picturesLength) return

    setVisibleSlide(prevState => prevState === 0 ? picturesLength - 1 : prevState - 1)
  }, [picturesLength])

  const onSwipeRight = useCallback(() => {
    if (!picturesLength) return

    setVisibleSlide(prevState => picturesLength - 1 === prevState ? 0 : prevState + 1)
  }, [picturesLength])

  useEffect(() => {
    if (isAutoCarousel) {
      if (!picturesLength) return

      const timeoutId = setInterval(() => setVisibleSlide(prevState =>
        picturesLength - 1 === prevState ? 0 : prevState + 1), speed)

      return () => clearInterval(timeoutId)
    }
  }, [picturesLength, visibleSlide, isAutoCarousel, speed])

  return (
    <>
      {isSwipe &&
        <div className={stylesSwipeWrapper}>
          <div onClick={onSwipeLeft}>
            <Image src={swipeLeftImg} alt="swipeLeft" />
          </div>
          <div onClick={onSwipeRight}>
            <Image src={swipeRightImg} alt="swipeRight" />
          </div>
        </div>
      }
      {isLoading ?
        <Loader /> :
        <div className={stylesWrapperSlider}>
          <div
            className={stylesContainerSlider}
            style={{ transform: `translate${axisScroll}(${-visibleSlide * 100 / column}%)` }}
          >
            {children}
          </div>
        </div>
      }
    </>
  )
}
