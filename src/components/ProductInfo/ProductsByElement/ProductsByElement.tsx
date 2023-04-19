import React, { FC } from 'react'

import { useGetProductsByElementQuery } from 'store/services/product'
import { firstNumberPage } from 'utils/constants/firstNumberPage'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { ProductCard } from 'components/ProductCard'

import { limitProductsToDisplay } from '../constants/limitProductsToDisplay'

type Props = {
  element: string,
  elementName: string,
  titleName: string,
}

export const ProductsByElement: FC<Props> = ({ element, elementName, titleName }) => {
  const { data } = useGetProductsByElementQuery({
    element,
    elementName,
    page: firstNumberPage,
    limit: limitProductsToDisplay
  })

  return (
    <CommonSlider
      titleName={titleName}
      sliderLength={data?.pageData?.length || 0}
    >
      {data?.pageData?.map(product =>
        <CommonSliderItem key={product.id}>
          <ProductCard product={product} />
        </CommonSliderItem>
      )}
    </CommonSlider>
  )
}
