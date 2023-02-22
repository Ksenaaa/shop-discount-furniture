import React, { FC } from 'react'

import { useGetProductsByCategoryQuery } from 'store/services/product'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

type Props = {
  category: string
}

export const ProductsByCategory: FC<Props> = ({ category }) => {
  const { data, isSuccess } = useGetProductsByCategoryQuery({
    key: category,
    page: 1,
    limit: 6
  })

  return (
    <CommonSlider
      titleName="Related products"
      sliderLength={isSuccess ? data?.pageData?.length : 0}
    >
      {data?.pageData?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
