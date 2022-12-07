import React from 'react'

import swipeLeft from 'img/svg/swipe-left.svg'
import swipeRight from 'img/svg/swipe-right.svg'
import sliderPic1 from 'img/jpg/living-room-pic-1.jpg'
import sliderPic2 from 'img/jpg/bad-room-pic-1.jpg'
import sliderPic3 from 'img/jpg/dining-room-pic-1.jpg'

import styles from './Slider.module.scss'

export const Slider = () => {

    const sliderPics = [sliderPic1,sliderPic2,sliderPic3]

    return (
        <div className={styles.wrapper}>
            <div className={styles.sliderPics}>
                {sliderPics.map(pic =>
                    <img src={pic} alt="pic" />
                )}
            </div>
            <div className={styles.swipeWrapper}>
                <img src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft}/>
                <img src={swipeRight} alt="swipeRight" className={styles.swipeRight}/>
            </div>
        </div>
    )
}
