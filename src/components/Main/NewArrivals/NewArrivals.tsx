import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipeLeft from 'img/svg/swipe-left-blue.svg'
import swipeRight from 'img/svg/swipe-right-blue.svg'
import { newArrivals } from 'utils/constants/newArrivals'
import { Routes } from 'utils/constants/routes'

import { Slider } from 'components/Slider'

import styles from './NewArrivals.module.scss'

export const NewArrivals = () => {
  const { windowWidth } = useSizeListener()

  return (
    <div className={styles.wrapper}>
      <Link href={`/${Routes.NEW_ARRIVALS}`} className={styles.title}>
        New Arrivals
      </Link>
      <div className={styles.wrapperSlider}>
        <Slider
          picturesLength={newArrivals?.length}
          isAutoCarousel={false}
          isSwipe={true}
          column={windowWidth > 450 ? 3 : 1}
          swipeLeftImg={swipeLeft}
          swipeRightImg={swipeRight}
          stylesSwipeWrapper={styles.stylesSwipeWrapper}
        >
          {newArrivals.map(item =>
            <Link href="/" className={styles.card} key={item.id}>
              <Image src={item.img} alt="img" />
            </Link>
          )}
        </Slider>
      </div>
    </div>
  )
}
