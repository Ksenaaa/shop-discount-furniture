import React from 'react'

import { useGetNewProductsQuery } from 'store/services/product'
import { titleName } from 'utils/constants/titleName'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

export const NewArrivals = () => {
  const { data, isSuccess } = useGetNewProductsQuery()

  const newArrivals = isSuccess ? data : []

  return (
    <CommonSlider
      titleName={titleName.newArrivals.name}
      pathTitle={`/${titleName.newArrivals.path}`}
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
