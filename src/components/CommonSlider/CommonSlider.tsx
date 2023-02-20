import React, { PropsWithChildren } from 'react'

import Link from 'next/link'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipeLeft from 'img/svg/swipe-left-blue.svg'
import swipeRight from 'img/svg/swipe-right-blue.svg'
import { AxisScroll } from 'utils/constants/axisScroll'

import { Slider } from 'components/Slider'

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
      {pathTitle ?
        <Link href={pathTitle} className={styles.title}>
          {titleName}
        </Link> :
        <div className={styles.title}>
          {titleName}
        </div>
      }
      <Slider
        picturesLength={sliderLength}
        isAutoCarousel={false}
        isSwipe={true}
        axisScroll={AxisScroll.X}
        column={windowWidth > 450 ? 3 : 1}
        swipeLeftImg={swipeLeft}
        swipeRightImg={swipeRight}
        stylesSwipeWrapper={styles.swipeWrapper}
        stylesContainerSlider={styles.containerSlider}
      >
        {children}
      </Slider>
    </div>
  )
}
