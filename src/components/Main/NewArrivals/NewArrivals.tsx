import React from 'react'

import { useGetSomeNewProductsQuery } from 'store/services/product'
import { Routes } from 'utils/constants/routes'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

export const NewArrivals = () => {
  const { data, isSuccess } = useGetSomeNewProductsQuery()

  const newArrivals = isSuccess ? data : []

  return (
    <CommonSlider
      titleName="New Arrivals"
      pathTitle={`/${Routes.NEW_ARRIVALS}`}
      sliderLength={newArrivals.length}
    >
      {newArrivals?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
