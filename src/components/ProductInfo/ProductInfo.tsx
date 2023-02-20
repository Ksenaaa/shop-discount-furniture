import React, { FC } from 'react'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import { IProduct } from 'interface/productInterface'
import { useGetProductQuery } from 'store/services/product'

import { MoreInformation } from 'components/MoreInformation'

import { textAboutMinHeight } from './constants/textAboutMinHeight'
import { ProductCharacteristics } from './ProductCharacteristics'
import { ProductPictures } from './ProductPictures'
import { ProductsByCategory } from './ProductsByCategory'
import { ProductsByType } from './ProductsByType'

import styles from './ProductInfo.module.scss'

type Props = {
  id: string
}

export const ProductInfo: FC<Props> = ({ id }) => {
  const { data, isSuccess } = useGetProductQuery(id)

  const product = isSuccess ? data : {} as IProduct

  const { isOpen: isOpenTextAbout, onToggle: toggleTextAbout } = useToggle(true)

  return (
    <div className={styles.wrapper}>
      {isSuccess &&
        <>
          <div className={styles.wrapperProduct}>
            <div className={styles.picturesWithDesc}>
              <ProductPictures pictures={product.imgs} />
              <div className={styles.description}>
                <div className={styles.descriptionTitle}>
                  About
                </div>
                <MoreInformation minHeight={textAboutMinHeight} onToggle={toggleTextAbout}>
                  <div className={cn(styles.descriptionText, isOpenTextAbout && styles.descriptionTextReadMore)}>
                    {product?.about}
                  </div>
                </MoreInformation>
              </div>
            </div>
            <div className={styles.characteristics}>
              <ProductCharacteristics product={product} />
            </div>
          </div>
          <ProductsByType type={product.type} />
          <ProductsByCategory category={product.category} />
        </>
      }
    </div>
  )
}
