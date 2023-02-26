import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import homeImg from 'img/svg/person.svg'
import { useGetMainTestimonialsQuery } from 'store/services/testimonials'
import { titleName } from 'utils/constants/titleName'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'

import { Stars } from './Stars'

import styles from './Testimonials.module.scss'

export const Testimonials = () => {
  const { data, isSuccess } = useGetMainTestimonialsQuery()

  const testimonials = isSuccess ? data : []

  return (
    <CommonSlider
      titleName={titleName.testimonials.name}
      pathTitle={`/${titleName.testimonials.path}`}
      sliderLength={testimonials.length}
    >
      {testimonials?.map(item =>
        <CommonSliderItem key={item.id}>
          <Link href={`/${titleName.testimonials.path}`} className={styles.wrapper}>
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
