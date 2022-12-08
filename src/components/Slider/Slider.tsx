import React, { useEffect, useRef, useState } from 'react'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import sliderPic1 from 'img/jpg/living-room-pic-1.jpg'
import sliderPic2 from 'img/jpg/bad-room-pic-1.jpg'
import sliderPic3 from 'img/jpg/living-room-pic-2.jpg'
import sliderPic4 from 'img/jpg/living-room-pic-3.jpg'
import { SliderItem } from './SliderItem'

import styles from './Slider.module.scss'

export const Slider = () => {
    const [numberPic, setNumberPic] = useState(0)

    const refContainer = useRef<HTMLDivElement>(null) 

    const sliderPics = [
        { img: sliderPic1, id: 1 },
        { img: sliderPic2, id: 2 },
        { img: sliderPic3, id: 3 },
        { img: sliderPic4, id: 4 },
    ]

    const nextPicture = () => {
        setNumberPic(preState => sliderPics.length-1 === preState ? 0 : preState + 1)
    }

    const previousPicture = () => {
        setNumberPic(preState => preState === 0 ? sliderPics.length-1 : preState - 1)
    }

    const findItem = (num: number) => {
        const child = refContainer?.current as HTMLDivElement
        child.children[num].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    useEffect(() => {
        const timeNext = setTimeout(() => nextPicture(), 1000)
        return () => clearTimeout(timeNext)
    }, [numberPic])

    useEffect(() =>{
        findItem(numberPic)
    }, [numberPic])

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerSlider} ref={refContainer}>
                {sliderPics.map(pic => 
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
