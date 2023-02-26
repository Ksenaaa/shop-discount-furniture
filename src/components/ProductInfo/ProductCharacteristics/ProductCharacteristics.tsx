import React, { FC, useEffect, useState } from 'react'

import Image from 'next/image'

import likeIcon from 'img/svg/like-empty.svg'
import { IProduct } from 'interface/productInterface'
import { useGetColorsQuery } from 'store/services/colors'
import { productColors } from 'utils/helpers/productColors'

import { Button } from 'components/Button'
import { ColorCard } from 'components/ColorCard'

import { PriceSelection } from './PriceSelection'

import styles from './ProductCharacteristics.module.scss'

type Props = {
  product: IProduct
}

export const ProductCharacteristics: FC<Props> = ({ product }) => {
  const [price, setPrice] = useState<number>(0)
  const [amountProduct, setAmountProduct] = useState<number>(1)

  useEffect(() => {
    setPrice(product.quality.king)
    setAmountProduct(1)
  }, [product])

  const onSubtractProduct = () => {
    setAmountProduct(preState => preState === 1 ? 1 : preState - 1)
  }

  const onAddProduct = () => {
    setAmountProduct(preState => preState + 1)
  }

  const { data: dataColors, isSuccess } = useGetColorsQuery()
  const colors = isSuccess ? productColors(product.colors, dataColors) : []

  const productMaterials = [...new Set(colors.map(color => color.material))].join(', ')

  return (
    <div className={styles.wrapper}>

      <div className={styles.sectionNameLike}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.like}>
          <Image src={likeIcon} alt="like" fill />
        </div>
      </div>

      <div className={styles.code}>{product.code}</div>

      <div className={styles.sectionPriceCountButton}>
        <div className={styles.price}>${price}</div>
        <div className={styles.count}>
          <div className={styles.amountSubtract} onClick={onSubtractProduct}>-</div>
          <div className={styles.amount}>{amountProduct}</div>
          <div className={styles.amountAdd} onClick={onAddProduct}>+</div>
        </div>
        <div className={styles.button}>
          <Button name="Add to cart" />
        </div>
      </div>

      <PriceSelection
        product={product}
        onChangePrice={setPrice}
        selectedPrice={price}
      />

      <div className={styles.characteristicsSection}>
        <div className={styles.dividingLine}></div>
        <div className={styles.characteristicsTitle}>characteristics:</div>
        <div className={styles.size}>
          <div className={styles.sizeTitle}>Size</div>
          <div className={styles.sizeCategories}>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>length:</div>
              <div className={styles.sizeValue}>{product.characteristics.size.length} mm</div>
            </div>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>width:</div>
              <div className={styles.sizeValue}>{product.characteristics.size.width} mm</div>
            </div>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>height:</div>
              <div className={styles.sizeValue}>{product.characteristics.size.height} mm</div>
            </div>
          </div>
        </div>
        <div className={styles.material}>
          <div className={styles.materialTitle}>Material</div>
          <div className={styles.materialList}>
            <div className={styles.materialItem}>{productMaterials}</div>
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.otherTitle}>Other</div>
          <div className={styles.otherDesc}>{product.characteristics.other}</div>
        </div>
      </div>

      <div className={styles.colorsSection}>
        <div className={styles.dividingLine}></div>
        <div className={styles.colorsTitle}>colors:</div>
        <div className={styles.colors}>
          {colors?.map((color, index) =>
            <div className={styles.color} key={index}>
              <div className={styles.colorCard} >
                <ColorCard img={color.img} />
              </div>
              <div className={styles.colorName}>{color.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
