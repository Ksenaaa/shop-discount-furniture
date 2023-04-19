import React, { FC, MouseEvent } from 'react'

import { IProduct } from 'interface/productInterface'
import { parsePriceCategory } from 'utils/helpers/parsePriceCategory'

import { Checkbox } from 'components/Checkbox'

import { defaultPriceCategory } from './constants/defaultPriceCategory'

import styles from './PriceSelection.module.scss'

type Props = {
  product: IProduct,
  onChangePrice: (price: number) => void,
  selectedPrice: number
}

export const PriceSelection: FC<Props> = ({ product, onChangePrice, selectedPrice }) => {
  const parsePrices = parsePriceCategory(product.quality)

  const handleChangePrice = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement

    input.value && onChangePrice(Number(input.value))
  }

  return (
    <div className={styles.priceSelection} onClick={handleChangePrice}>
      {parsePrices?.map(category =>
        <div className={styles.priceCategory} key={category.name}>
          <Checkbox
            type="radio"
            labelName={category.name}
            radioName="price"
            value={category.value}
            checked={selectedPrice === category.value}
            defaultChecked={category.name === defaultPriceCategory}
          />
          <div className={styles.priceValue}>
            ${category.value}
          </div>
        </div>
      )}
    </div>
  )
}
