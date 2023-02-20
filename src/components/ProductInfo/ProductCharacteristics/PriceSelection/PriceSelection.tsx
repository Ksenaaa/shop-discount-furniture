import React, { FC, MouseEvent } from 'react'

import { IProduct } from 'interface/productInterface'
import { parsePriceCategory } from 'utils/helpers/parsePriceCategory'

import { Checkbox } from 'components/Checkbox'

import styles from './PriceSelection.module.scss'

type Props = {
  product: IProduct,
  onChangePrice: (price: number) => void
}

export const PriceSelection: FC<Props> = ({ product, onChangePrice }) => {
  const parsePrices = parsePriceCategory(product.quality)

  const handlerChangePrice = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement

    input.value && onChangePrice(Number(input.value))
  }

  return (
    <div className={styles.priceSelection} onClick={handlerChangePrice}>
      {parsePrices?.map(category =>
        <div className={styles.priceCategory} key={category.name}>
          <Checkbox
            type="radio"
            labelName={category.name}
            radioName="price"
            value={category.value}
            defaultChecked={category.name === parsePrices[0].name && true}
          />
          <div className={styles.priceValue}>
            ${category.value}
          </div>
        </div>
      )}
    </div>
  )
}
