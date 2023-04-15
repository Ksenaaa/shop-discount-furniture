import React, { FC, useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import basketIcon from 'img/svg/basket.svg'
import likeIcon from 'img/svg/like-empty.svg'
import { ICardColor } from 'interface/colorInterface'
import { ICardProduct } from 'interface/productInterface'
import { useGetColorsQuery } from 'store/services/colors'
import { menuCategories } from 'utils/constants/menuCategories'
import { titleName } from 'utils/constants/titleName'
import { getBlurImage } from 'utils/helpers/getBlurImage'
import { productColors } from 'utils/helpers/productColors'

import { ColorCard } from 'components/ColorCard'

import styles from './ProductCard.module.scss'

type Props = {
  product: ICardProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { data, isSuccess } = useGetColorsQuery()
  const colors = isSuccess ? productColors(product.colors, data as ICardColor[]) : []

  const getBlur = useCallback((img: string) => getBlurImage(img), [])

  const { t } = useTranslation()
  const categoryData = menuCategories?.find(categoryData => categoryData.id === product.category)

  return (
    <Link href={`/${titleName.mainCatalog.path}/${categoryData?.path}/${product.id}`} className={styles.wrapper}>
      <div className={styles.picture}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${product.img}`}
          alt="img"
          fill
          sizes="33vw"
          placeholder="blur"
          blurDataURL={getBlur(product.img)}
        />
      </div>
      <div className={styles.name}>
        {product.name}
      </div>
      <div className={styles.sectionMidl}>
        <div className={styles.categoryWithCode}>
          {t(categoryData?.name || '')}: {product.code}
        </div>
        <div className={styles.colors}>
          {colors?.slice(-4).map((color, index) =>
            <div className={styles.color} key={index}>
              <ColorCard img={color.img} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.price}>
        from ${product.price}
      </div>
      <div className={styles.activeElements}>
        <div className={styles.like}>
          <Image src={likeIcon} alt="like" />
        </div>
        <div className={styles.basket}>
          <Image src={basketIcon} alt="basket" />
        </div>
      </div>
    </Link>
  )
}
