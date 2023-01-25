import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSizeListener } from 'hooks/sezeListenerHook'
import { useSwipe } from 'hooks/swipeHook'
import homeImg from 'img/svg/person.svg'
import swipeLeft from 'img/svg/swipe-left-blue.svg'
import swipeRight from 'img/svg/swipe-right-blue.svg'
import { useGetTestimonialsQuery } from 'store/services/testimonials'
import { routes } from 'utils/constants/routes'

import { Slider } from 'components/Slider'

import { Stars } from './Stars'

import styles from './Testimonials.module.scss'

export const Testimonials = () => {
  const { swipe, onSwipeLeft, onSwipeRight } = useSwipe()

  const { windowWidth } = useSizeListener()

  const { data: testimonials } = useGetTestimonialsQuery()

  return (
    <div className={styles.wrapper}>
      <Link href={`/${routes.TESTIMONIALS}`} className={styles.title}>
        Testimonials
      </Link>
      <div className={styles.swipeWrapper}>
        <Image src={swipeLeft} alt="swipeLeft" className={styles.swipeLeft} onClick={onSwipeLeft} />
        <Image src={swipeRight} alt="swipeRight" className={styles.swipeRight} onClick={onSwipeRight} />
      </div>
      <div className={styles.wrapperSlider}>
        <Slider
          picturesLength={testimonials?.length}
          isAutoCarousel={false}
          swipe={swipe}
          column={windowWidth > 450 ? 3 : 1}
        >
          {testimonials?.map(item =>
            <Link href="/" className={styles.card} key={item.id}>
              <Image src={homeImg} alt="img" className={styles.picture}/>
              <div className={styles.stars} >
                <Stars quantityFull={item.stars} />
              </div>
              <div className={styles.name} >
                {item.name}
              </div>
              <div className={styles.text} >
                {item.text}
              </div>
            </Link>
          )}
        </Slider>
      </div>
    </div>
  )
}
