import React, { FC } from 'react'

import { IProduct } from 'interface/productInterface'

import { ProductCharacteristics } from './ProductCharacteristics'
import { ProductDescription } from './ProductDescription'
import { ProductPictures } from './ProductPictures'
import { ProductsByCategory } from './ProductsByCategory'
import { ProductsByType } from './ProductsByType'

import styles from './ProductInfo.module.scss'

type Props = {
  product: IProduct
}

export const ProductInfo: FC<Props> = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperProduct}>
        <div className={styles.picturesWithDesc}>
          <ProductPictures pictures={product.imgs} />
          <ProductDescription product={product} />
        </div>
        <div className={styles.characteristics}>
          <ProductCharacteristics product={product} />
        </div>
      </div>
      <ProductsByType type={product.type} />
      <ProductsByCategory category={product.category} />
    </div>
  )
}
