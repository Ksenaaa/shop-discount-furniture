import React, { FC } from 'react'

import { useGetSomeProductsByTypeQuery } from 'store/services/product'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

type Props = {
  type: string
}

export const ProductsByType: FC<Props> = ({ type }) => {
  const { data, isSuccess } = useGetSomeProductsByTypeQuery(type)

  const productsByType = isSuccess ? data : []

  return (
    <CommonSlider
      titleName="Items in this set"
      sliderLength={productsByType.length}
    >
      {productsByType?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
