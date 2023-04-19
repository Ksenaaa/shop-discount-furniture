import React from 'react'

import { useGetNewProductsQuery } from 'store/services/product'
import { titleName } from 'utils/constants/titleName'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

export const NewArrivals = () => {
  const { data } = useGetNewProductsQuery()

  return (
    <CommonSlider
      titleName={titleName.newArrivals.name}
      pathTitle={`/${titleName.newArrivals.path}`}
      sliderLength={data?.length || 0}
    >
      {data?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
