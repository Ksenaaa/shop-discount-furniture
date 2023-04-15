import React, { FC } from 'react'

import { IProduct } from 'interface/productInterface'

import { ProductElement } from './constants/productElement'
import { ProductCharacteristics } from './ProductCharacteristics'
import { ProductDescription } from './ProductDescription'
import { ProductPictures } from './ProductPictures'
import { ProductsByElement } from './ProductsByElement'

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
      <ProductsByElement
        element={ProductElement.TYPE}
        elementName={product.type}
        titleName="Products by this type"
      />
      <ProductsByElement
        element={ProductElement.CATEGORY}
        elementName={product.category}
        titleName="Products by this category"
      />
    </div>
  )
}
