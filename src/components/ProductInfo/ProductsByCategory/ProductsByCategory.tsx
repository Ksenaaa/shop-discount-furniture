import React, { FC } from 'react'

import { useGetSomeProductsByCategoryQuery } from 'store/services/product'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

type Props = {
  category: string
}

export const ProductsByCategory: FC<Props> = ({ category }) => {
  const { data, isSuccess } = useGetSomeProductsByCategoryQuery(category)

  const productsByCategory = isSuccess ? data : []

  return (
    <CommonSlider
      titleName="Related products"
      sliderLength={productsByCategory.length}
    >
      {productsByCategory?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
