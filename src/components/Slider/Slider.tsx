import React, { useCallback, useEffect, useRef } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { nextPicture, previousPicture } from 'store/counterSliderSlice'
import { useGetItemsQuery } from 'store/services/slider'

import { Loading } from 'components/Loading'

import { SliderItem } from './SliderItem'

import styles from './Slider.module.scss'

export const Slider = () => {
    const { indexPicture } = useAppSelector(state => state.countSlider)

    const { data: sliderPictures, isLoading } = useGetItemsQuery()

    const dispatch = useAppDispatch()

    const refContainer = useRef<HTMLDivElement>(null)

    const onClickNext = useCallback(() => {
        dispatch(nextPicture(sliderPictures?.length))
    }, [dispatch, sliderPictures?.length])

    const onClickPrevious = useCallback(() => {
        dispatch(previousPicture(sliderPictures?.length))
    }, [dispatch, sliderPictures?.length])

    const findItem = (num: number) => {
        if (!refContainer?.current) return
        const child = refContainer?.current as HTMLDivElement

        child?.children[num]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    useEffect(() => {
        const timeNext = setTimeout(() => dispatch(nextPicture(sliderPictures?.length)), 3000)

        return () => clearTimeout(timeNext)
    }, [indexPicture, dispatch, sliderPictures?.length])

    useEffect(() => {
        findItem(indexPicture)
    }, [indexPicture])

    return (
        <div className={styles.wrapper}>
            {isLoading ?
                <Loading /> :
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
