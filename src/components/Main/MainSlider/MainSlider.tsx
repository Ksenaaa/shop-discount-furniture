import React from 'react'

import swipe from 'img/svg/swipe-arrow.svg'
import { useGetSliderImgsQuery } from 'store/services/slider'
import { AxisScroll } from 'utils/constants/axisScroll'
import { timeoutTransition } from 'utils/constants/timeoutTransition'

import { Slider } from 'components/Slider'

import { SliderItem } from './SliderItem'

import styles from './MainSlider.module.scss'

export const MainSlider = () => {
  const { data: sliderPictures = [], isLoading } = useGetSliderImgsQuery()

  return (
    <div className={styles.wrapper}>
      <Slider
        picturesLength={sliderPictures.length}
        speed={timeoutTransition}
        isLoading={isLoading}
        isAutoCarousel={true}
        isSwipe={true}
        axisScroll={AxisScroll.X}
        column={1}
        swipeLeftImg={swipe}
        swipeRightImg={swipe}
        stylesSwipeWrapper={styles.swipeWrapper}
        stylesContainerSlider={styles.containerSlider}
        stylesWrapperSlider={styles.wrapperSlider}
      >
        {sliderPictures?.map(pic =>
          <SliderItem key={pic.id} picture={pic} />
        )}
      </Slider>
    </div>
  )
}
