import React, { useCallback, useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { useGetSliderImgsQuery } from 'store/services/slider'
import { timeoutTransition } from 'utils/constants/timeoutTransition'

import { Loader } from 'components/Loader'

import { SliderItem } from './SliderItem'

import styles from './Slider.module.scss'

export const Slider = () => {
  const [indexPicture, setIndexPicture] = useState<number>(0)

  const { data: sliderPictures, isLoading } = useGetSliderImgsQuery()

  const refContainer = useRef<HTMLDivElement>(null)

  const handlerClickNext = useCallback(() =>
    sliderPictures?.length && setIndexPicture(preState => sliderPictures.length - 1 === preState ? 0 : preState + 1)
  , [sliderPictures?.length])

  const handlerClickPrevious = useCallback(() =>
    sliderPictures?.length && setIndexPicture(preState => preState === 0 ? sliderPictures.length - 1 : preState - 1)
  , [sliderPictures?.length])

  const switchingImg = (num: number) => {
    if (!refContainer?.current) return
    const child = refContainer?.current as HTMLDivElement

    child?.children[num]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (!sliderPictures?.length) return

    switchingImg(indexPicture)

    const timeoutId = setTimeout(() => setIndexPicture(preState =>
      sliderPictures.length - 1 === preState ? 0 : preState + 1)
    , timeoutTransition)

    return () => clearTimeout(timeoutId)
  }, [sliderPictures?.length, indexPicture])

  return (
    <div className={styles.wrapper}>
      {isLoading ?
        <Loader /> :
        <div className={styles.containerSlider} ref={refContainer}>
          {sliderPictures?.map(pic =>
            <SliderItem key={pic.id} picture={pic} />
          )}
        </div>
      }
      <div className={styles.swipeWrapper}>
        <Image src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={handlerClickPrevious}/>
        <Image src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={handlerClickNext}/>
      </div>
    </div>
  )
}
