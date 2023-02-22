import React, { FC } from 'react'

import { useGetProductsByTypeQuery } from 'store/services/product'

import { CommonSlider } from 'components/CommonSlider'
import { CommonSliderItem } from 'components/CommonSlider/CommonSliderItem'
import { Loader } from 'components/Loader'
import { ProductCard } from 'components/ProductCard'

type Props = {
  type: string
}

export const ProductsByType: FC<Props> = ({ type }) => {
  const { data, isSuccess } = useGetProductsByTypeQuery({
    key: type,
    page: 1,
    limit: 6
  })

  return (
    <>
      {!isSuccess
        ? <Loader /> :
        <CommonSlider
          titleName="Items in this set"
          sliderLength={isSuccess ? data?.pageData?.length : 0}
        >
          {data?.pageData?.map(product =>
            <CommonSliderItem key={product.id}>
              <ProductCard product={product} />
            </CommonSliderItem>
          )}
        </CommonSlider>
      }
    </>
  )
}
