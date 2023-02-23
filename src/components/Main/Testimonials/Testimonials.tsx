import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import homeImg from 'img/svg/person.svg'
import { useGetMainTestimonialsQuery } from 'store/services/testimonials'
import { Routes } from 'utils/constants/routes'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'

import { Stars } from './Stars'

import styles from './Testimonials.module.scss'

export const Testimonials = () => {
  const { data, isSuccess } = useGetMainTestimonialsQuery()

  const testimonials = isSuccess ? data : []

  return (
    <CommonSlider
      titleName="Testimonials"
      pathTitle={`/${Routes.TESTIMONIALS}`}
      sliderLength={testimonials.length}
    >
      {testimonials?.map(item =>
        <CommonSliderItem key={item.id}>
          <Link href={`/${Routes.TESTIMONIALS}`} className={styles.wrapper}>
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
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
