import React, { PropsWithChildren } from 'react'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipe from 'img/svg/swipe-arrow.svg'
import { AxisScroll } from 'utils/constants/axisScroll'

import { Slider } from 'components/Slider'
import { Title } from 'components/Title'

import { picturesCommonSlider } from './constants/picturesCommonSlider'

import styles from './CommonSlider.module.scss'

type Props = {
  titleName: string,
  pathTitle?: string,
  sliderLength: number,
}

export const CommonSlider = ({ titleName, pathTitle, sliderLength, children }: PropsWithChildren<Props>) => {
  const { windowWidth } = useSizeListener()

  return (
    <div className={styles.wrapper}>
      <Title name={titleName} pathTitle={pathTitle} />
      <Slider
        picturesLength={sliderLength}
        isAutoCarousel={false}
        isSwipe={true}
        axisScroll={AxisScroll.X}
        column={
          windowWidth > picturesCommonSlider.minWindowWidth ?
            picturesCommonSlider.maxColumnSlider :
            picturesCommonSlider.minColumnSlider
        }
        swipeLeftImg={swipe}
        swipeRightImg={swipe}
        stylesSwipeWrapper={styles.swipeWrapper}
        stylesContainerSlider={styles.containerSlider}
        stylesWrapperSlider={styles.wrapperSlider}
      >
        {children}
      </Slider>
    </div>
  )
}
