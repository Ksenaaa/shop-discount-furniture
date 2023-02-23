import { ICardColor } from 'interface/colorInterface'

export const productColors = (colorsProduct: string[], colors: ICardColor[]) => {
  const dataColors = [] as ICardColor[]

  colorsProduct.forEach(id => {
    const findColor = colors.find(color => color.id === id) as ICardColor

    return dataColors.push(findColor)
  })

  return dataColors
}
