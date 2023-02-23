import React, { FC, useEffect } from 'react'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import { IProduct } from 'interface/productInterface'

import { MoreInformation } from 'components/MoreInformation'

import { textAboutMinHeight } from './constants/textAboutMinHeight'

import styles from './ProductDescription.module.scss'

type Props = {
  product: IProduct
}

export const ProductDescription: FC<Props> = ({ product }) => {
  const { isOpen: isOpenTextAbout, onToggle: toggleTextAbout, onClose } = useToggle(true)

  useEffect(() => {
    onClose()
  }, [product, onClose])

  return (
    <div className={styles.description}>
      <div className={styles.descriptionTitle}>
        About
      </div>
      <MoreInformation minHeight={textAboutMinHeight} onToggle={toggleTextAbout} >
        <div className={cn(styles.descriptionText, isOpenTextAbout && styles.descriptionTextReadMore)}>
          {product.about}
        </div>
      </MoreInformation>
    </div>
  )
}
