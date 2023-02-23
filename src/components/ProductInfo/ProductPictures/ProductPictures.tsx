import React, { FC, useCallback, useState } from 'react'

import Image from 'next/image'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipeLeft from 'img/svg/swipe-product-pictures-left.svg'
import swipeRight from 'img/svg/swipe-product-pictures-right.svg'
import { AxisScroll } from 'utils/constants/axisScroll'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import { Slider } from 'components/Slider'

import { productPicturesSlider } from './constants/productPicturesSlider'
import { OtherPicturesCard } from './OtherPicturesCard'

import styles from './ProductPictures.module.scss'

type Props = {
  pictures: string[]
}

export const ProductPictures: FC<Props> = ({ pictures }) => {
  const [indexMainPicture, setMainPicture] = useState(0)

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  const { windowWidth } = useSizeListener()

  const handlerChangePicture = useCallback((index: number) => {
    setMainPicture(index)
  }, [])

  return (
    <div className={styles.pictures}>
      <div className={styles.otherPictures}>
        <Slider
          picturesLength={pictures.length}
          isAutoCarousel={false}
          isSwipe={true}
          axisScroll={windowWidth <= productPicturesSlider.minWindowWidth ? AxisScroll.X : AxisScroll.Y}
          column={
            windowWidth <= productPicturesSlider.minWindowWidth ?
              productPicturesSlider.minColumnSlider :
              windowWidth <= productPicturesSlider.midlWindowWidth ?
                productPicturesSlider.midlColumnSlider :
                productPicturesSlider.maxColumnSlider
          }
          swipeLeftImg={swipeLeft}
          swipeRightImg={swipeRight}
          stylesSwipeWrapper={styles.swipeWrapper}
          stylesContainerSlider={styles.containerSlider}
        >
          {pictures.map((id, index) =>
            <OtherPicturesCard
              key={index}
              id={id}
              index={index}
              onClickItem={handlerChangePicture}
              indexMainPicture={indexMainPicture} />
          )}
        </Slider>
      </div>
      <div className={styles.mainPicture}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${pictures[indexMainPicture]}`}
          alt="img"
          fill
          sizes="33vw"
          priority
          placeholder="blur"
          blurDataURL={getBlur(pictures[indexMainPicture])}
        />
      </div>
    </div>
  )
}
