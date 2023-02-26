import React, { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import { useSizeListener } from 'hooks/sezeListenerHook'
import swipe from 'img/svg/arrow-down-icon.svg'
import { useGetMainCatalogImgsQuery } from 'store/services/mainCatalog'
import { AxisScroll } from 'utils/constants/axisScroll'
import { menuCategories } from 'utils/constants/menuCategories'
import { titleName } from 'utils/constants/titleName'
import { getBlurImage } from 'utils/helpers/getBlurImage'

import { Slider } from 'components/Slider'
import { Title } from 'components/Title'

import { catalogPicturesSlider } from './constants/catalogPicturesSlider'

import styles from './MainCatalog.module.scss'

export const MainCatalog = () => {
  const { data: catalogPictures } = useGetMainCatalogImgsQuery()

  const { t } = useTranslation()

  const { windowWidth } = useSizeListener()

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  return (
    <>
      <Title name={titleName.mainCatalog.name} pathTitle={`/${titleName.mainCatalog.path}`} />
      <div className={styles.cards}>
        <Slider
          picturesLength={menuCategories.length}
          isAutoCarousel={false}
          isSwipe={true}
          axisScroll={AxisScroll.X}
          column={windowWidth <= catalogPicturesSlider.minWindowWidth ?
            catalogPicturesSlider.minColumnSlider :
            catalogPicturesSlider.maxColumnSlider
          }
          swipeLeftImg={swipe}
          swipeRightImg={swipe}
          stylesSwipeWrapper={styles.swipeWrapper}
          stylesContainerSlider={styles.containerSlider}
          stylesWrapperSlider={styles.wrapperSlider}
        >
          {menuCategories.map(item =>
            <Link href={`/${titleName.mainCatalog.path}/${item.path}`} key={item.id} className={styles.wrapperCard}>
              <div className={styles.card}>
                {catalogPictures?.map(picture =>
                  picture.name === item.id &&
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${picture.img}`}
                      alt={picture.name}
                      key={picture.id}
                      className={styles.picture}
                      priority
                      fill
                      sizes="25vw"
                      placeholder="blur"
                      blurDataURL={getBlur(picture.img)}
                    />
                )}
                <h2 className={styles.title}>
                  {t(item.name)}
                </h2>
              </div>
            </Link>
          )}
        </Slider>
      </div>
    </>
  )
}
