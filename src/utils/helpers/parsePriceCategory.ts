import { IPriceCategory } from 'interface/productInterface'

type ParsePricesType = {
  name: string,
  value: number
}

export const parsePriceCategory = (prices: IPriceCategory) => {
  const pricesToArray = Object.entries(prices) as [string, number][]

  const parsePrices = pricesToArray.reduce((acc: ParsePricesType[], item) => {
    return [...acc, { name: item[0], value: item[1] }]
  }, [])

  return parsePrices
}
