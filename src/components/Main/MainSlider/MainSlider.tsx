import React from 'react'

import Image from 'next/image'

import { useSwipe } from 'hooks/swipeHook'
import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { useGetSliderImgsQuery } from 'store/services/slider'
import { timeoutTransition } from 'utils/constants/timeoutTransition'

import { Slider } from 'components/Slider'

import { SliderItem } from './SliderItem'

import styles from './MainSlider.module.scss'

export const MainSlider = () => {
  const { swipe, onSwipeLeft, onSwipeRight } = useSwipe()

  const { data: sliderPictures, isLoading } = useGetSliderImgsQuery()

  return (
    <div className={styles.wrapper}>
      <Slider
        picturesLength={sliderPictures?.length}
        speed={timeoutTransition}
        isLoading={isLoading}
        isAutoCarousel={true}
        swipe={swipe}
        column={1}
      >
        {sliderPictures?.map(pic =>
          <SliderItem key={pic.id} picture={pic} />
        )}
      </Slider>
      <div className={styles.swipeWrapper}>
        <Image src={swipeLeft} alt="left" className={styles.swipeLeft} onClick={onSwipeLeft} />
        <Image src={swipeRight} alt="right" className={styles.swipeRight} onClick={onSwipeRight} />
      </div>
    </div>
  )
}
