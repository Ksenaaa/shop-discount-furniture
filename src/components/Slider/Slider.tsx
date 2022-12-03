import React from 'react'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import sliderPic from 'img/jpg/living-room-pic-1.jpg'

import styles from './Slider.module.scss'

export const Slider = () => {
    return (
        <div className={styles.wrapper}>
            <img src={sliderPic} alt="slider" />
            <img src={swipeLeft} alt="slider" className={styles.swipe_left}/>
            <img src={swipeRight} alt="slider" className={styles.swipe_right}/>
        </div>
    )
}
