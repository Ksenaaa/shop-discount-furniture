import React, { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { useGetSliderImgsQuery } from 'store/services/slider'
import { timeoutTransition } from 'utils/constants/timeoutTransition'

import { Loader } from 'components/Loader'

import { SliderItem } from './SliderItem'

import styles from './Slider.module.scss'

export const Slider = () => {
  const [visibleSlide, setVisibleSlide] = useState<number>(0)

  const { data: sliderPictures, isLoading } = useGetSliderImgsQuery()

  const handlerClickNext = useCallback(() =>
    sliderPictures?.length && setVisibleSlide(preState => sliderPictures.length - 1 === preState ? 0 : preState + 1)
  , [sliderPictures?.length])

  const handlerClickPrevious = useCallback(() =>
    sliderPictures?.length && setVisibleSlide(preState => preState === 0 ? sliderPictures.length - 1 : preState - 1)
  , [sliderPictures?.length])

  useEffect(() => {
    if (!sliderPictures?.length) return

    const timeoutId = setInterval(() => setVisibleSlide(preState =>
      sliderPictures.length - 1 === preState ? 0 : preState + 1), timeoutTransition)

    return () => clearInterval(timeoutId)
  }, [sliderPictures?.length, visibleSlide])

  return (
    <div className={styles.wrapper}>
      {isLoading ?
        <Loader /> :
        <div className={styles.containerSlider} style={{ transform: `translateX(${-visibleSlide * 100}%)` }}>
          {sliderPictures?.map(pic =>
            <SliderItem key={pic.id} picture={pic} />
          )}
        </div>
      }
      <div className={styles.swipeWrapper}>
        <Image src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={handlerClickPrevious} />
        <Image src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={handlerClickNext} />
      </div>
    </div>
  )
}
