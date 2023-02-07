import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSizeListener } from 'hooks/sezeListenerHook'
import homeImg from 'img/svg/person.svg'
import swipeLeftImg from 'img/svg/swipe-left-blue.svg'
import swipeRightImg from 'img/svg/swipe-right-blue.svg'
import { useGetMainTestimonialsQuery } from 'store/services/testimonials'
import { Routes } from 'utils/constants/routes'

import { Slider } from 'components/Slider'

import { Stars } from './Stars'

import styles from './Testimonials.module.scss'

export const Testimonials = () => {
  const { windowWidth } = useSizeListener()

  const { data: testimonials = [] } = useGetMainTestimonialsQuery()

  return (
    <div className={styles.wrapper}>
      <Link href={`/${Routes.TESTIMONIALS}`} className={styles.title}>
        Testimonials
      </Link>
      <div className={styles.wrapperSlider}>
        <Slider
          picturesLength={testimonials.length}
          isAutoCarousel={false}
          isSwipe={true}
          column={windowWidth > 450 ? 3 : 1}
          swipeLeftImg={swipeLeftImg}
          swipeRightImg={swipeRightImg}
          stylesSwipeWrapper={styles.stylesSwipeWrapper}
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
