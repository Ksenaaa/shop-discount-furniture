import React, { useCallback, useEffect, useRef, useState } from 'react'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import { SliderItem } from './SliderItem'
import { useHttp } from 'hooks/http.hooks'
import { IImgSlider } from 'interface/IImgSlider'

import styles from './Slider.module.scss'

export const Slider = () => {
    const [pictures, setPictures] = useState<IImgSlider[]>([])
    const [indexPicture, setIndexPicture] = useState(0)

    const refContainer = useRef<HTMLDivElement>(null) 

    const { request } = useHttp()

    const getImgForSlider = useCallback(async() => {
        const data = await request({ url: 'slider' })
        setPictures(data)
    }, [request])

    useEffect(() => {
        getImgForSlider()
    }, [getImgForSlider])

    const nextPicture = () => {
        setIndexPicture(preState => pictures.length-1 === preState ? 0 : preState + 1)
    }

    const previousPicture = () => {
        setIndexPicture(preState => preState === 0 ? pictures.length-1 : preState - 1)
    }

    const findItem = (num: number) => {
        if (!refContainer?.current) return
        const child = refContainer?.current as HTMLDivElement
        child?.children[num]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    useEffect(() => {
        const timeNext = setTimeout(() => nextPicture(), 3000)
        return () => clearTimeout(timeNext)
    }, [indexPicture, nextPicture])

    useEffect(() => {
        findItem(indexPicture)
    }, [indexPicture])

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerSlider} ref={refContainer}>
                {pictures?.map(pic => 
                    <SliderItem key={pic.id} picture={pic} />
                )}
            </div>
            <div className={styles.swipeWrapper}>
                <img src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={previousPicture}/>
                <img src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={nextPicture}/>
            </div>
        </div>
    )
}
