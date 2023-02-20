import React, { FC, MouseEvent, useState } from 'react'

import Image from 'next/image'

import likeIcon from 'img/svg/heart-icon-orange.svg'
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
  const [price, setPrice] = useState<number>(product.quality.king)
  const [amountProduct, setAmountProduct] = useState<number>(1)

  const onSubtractProduct = () => {
    setAmountProduct(preState => preState === 1 ? 1 : preState - 1)
  }

  const onAddProduct = () => {
    setAmountProduct(preState => preState + 1)
  }

  const { data: dataColors, isSuccess } = useGetColorsQuery()
  const colors = isSuccess ? productColors(product.colors, dataColors) : []

  const productMaterials = [...new Set(colors.map(i => i.material))]

  const onChangePrice = (price: number) => {
    setPrice(price)
  }

  const handlerClickLike = (e: MouseEvent) => {
    e.preventDefault()

    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.code}>{product.code}</div>

      <div className={styles.sectionPriceCountButtonLike}>
        <div className={styles.price}>${price}</div>
        <div className={styles.count}>
          <div className={styles.amountSubtract} onClick={onSubtractProduct}>-</div>
          <div className={styles.amount}>{amountProduct}</div>
          <div className={styles.amountAdd} onClick={onAddProduct}>+</div>
        </div>
        <div className={styles.button}>
          <Button name="Add to cart" />
        </div>
        <div className={styles.like} onClick={handlerClickLike}>
          <Image src={likeIcon} alt="like" fill />
        </div>
      </div>

      <PriceSelection
        product={product}
        onChangePrice={onChangePrice}
      />

      <div className={styles.colorsSection}>
        <div className={styles.colorsTitle}>colors:</div>
        <div className={styles.dividingLine}></div>
        <div className={styles.colors}>
          {colors?.map(color =>
            <div className={styles.color} key={color.id}>
              <div className={styles.colorCard} >
                <ColorCard img={color.img} />
              </div>
              <div className={styles.colorName}>{color.name}</div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.characteristicsSection}>
        <div className={styles.characteristicsTitle}>characteristics:</div>
        <div className={styles.dividingLine}></div>
        <div className={styles.size}>
          <div className={styles.sizeTitle}>Size</div>
          <div className={styles.sizeCategories}>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>length</div>
              <div className={styles.sizeValue}>{product.characteristics.size.length} mm</div>
            </div>
            <div className={styles.sizeDividing}>X</div>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>width</div>
              <div className={styles.sizeValue}>{product.characteristics.size.width} mm</div>
            </div>
            <div className={styles.sizeDividing}>X</div>
            <div className={styles.sizeCategory}>
              <div className={styles.sizeCategoryTitle}>height</div>
              <div className={styles.sizeValue}>{product.characteristics.size.height} mm</div>
            </div>
          </div>
        </div>
        <div className={styles.material}>
          <div className={styles.materialTitle}>Material</div>
          <div className={styles.materialList}>
            {productMaterials.map((color, i) =>
              <div className={styles.materialItem} key={i}>{color}</div>
            )}
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.otherTitle}>Other</div>
          <div className={styles.otherDesc}>{product.characteristics.other}</div>
        </div>
      </div>
    </div>
  )
}
