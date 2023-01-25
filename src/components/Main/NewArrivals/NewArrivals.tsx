import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSizeListener } from 'hooks/sezeListenerHook'
import { useSwipe } from 'hooks/swipeHook'
import swipeLeft from 'img/svg/swipe-left-blue.svg'
import swipeRight from 'img/svg/swipe-right-blue.svg'
import { newArrivals } from 'utils/constants/newArrivals'
import { routes } from 'utils/constants/routes'

import { Slider } from 'components/Slider'

import styles from './NewArrivals.module.scss'

export const NewArrivals = () => {
  const { swipe, onSwipeLeft, onSwipeRight } = useSwipe()

  const { windowWidth } = useSizeListener()

  return (
    <div className={styles.wrapper}>
      <Link href={`/${routes.NEW_ARRIVALS}`} className={styles.title}>
        New Arrivals
      </Link>
      <div className={styles.swipeWrapper}>
        <Image src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={onSwipeLeft} />
        <Image src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={onSwipeRight} />
      </div>
      <div className={styles.wrapperSlider}>
        <Slider
          picturesLength={newArrivals?.length}
          isAutoCarousel={false}
          swipe={swipe}
          column={windowWidth > 450 ? 3 : 1}
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
