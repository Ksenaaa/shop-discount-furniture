import React, { useCallback, useEffect, useRef, useState } from 'react'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { useGetSliderImgsQuery } from 'store/services/slider'

import { Loader } from 'components/Loader'

import { SliderItem } from './SliderItem'

import styles from './Slider.module.scss'

export const Slider = () => {
    const [indexPicture, setIndexPicture] = useState<number>(0)

    const { data: sliderPictures, isLoading } = useGetSliderImgsQuery()

    const refContainer = useRef<HTMLDivElement>(null)

    const onClickNext = useCallback(() =>
        sliderPictures?.length && setIndexPicture(preState => sliderPictures.length - 1 === preState ? 0 : preState + 1)
    , [sliderPictures?.length])

    const onClickPrevious = useCallback(() =>
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

        const timeNext = setTimeout(() => setIndexPicture(preState =>
            sliderPictures.length - 1 === preState ? 0 : preState + 1)
        , 3000)

        return () => clearTimeout(timeNext)
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
                <img src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={onClickPrevious}/>
                <img src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={onClickNext}/>
            </div>
        </div>
    )
}
