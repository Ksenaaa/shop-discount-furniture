import React, { FC, useCallback, useState } from 'react'

import Image from 'next/image'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipe from 'img/svg/arrow-down-icon.svg'
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

  const handleChangePicture = useCallback((index: number) => {
    setMainPicture(index)
  }, [])

  return (
    <div className={styles.pictures}>
      <div className={styles.otherPictures}>
        <Slider
          picturesLength={pictures.length}
          isAutoCarousel={false}
          isSwipe={true}
          axisScroll={windowWidth >= productPicturesSlider.lg.minWidth ? AxisScroll.Y : AxisScroll.X}
          column={
            windowWidth >= productPicturesSlider.xlg.minWidth
              ? productPicturesSlider.xlg.column :
              windowWidth >= productPicturesSlider.lg.minWidth
                ? productPicturesSlider.lg.column :
                windowWidth >= productPicturesSlider.md.minWidth
                  ? productPicturesSlider.md.column :
                  productPicturesSlider.sm.column
          }
          swipeLeftImg={swipe}
          swipeRightImg={swipe}
          stylesSwipeWrapper={styles.swipeWrapper}
          stylesContainerSlider={styles.containerSlider}
          stylesWrapperSlider={styles.wrapperSlider}
        >
          {pictures.map((id, index) =>
            <OtherPicturesCard
              key={index}
              id={id}
              index={index}
              onClickItem={handleChangePicture}
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
