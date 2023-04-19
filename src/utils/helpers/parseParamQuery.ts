import { IFilterApply, IRangeFilter } from 'interface/filterInterface'
import { ISortApply } from 'interface/sortInterface'

const splitElement = (value: string) => value.split('=')

export const parseParamSortQuery = (param?: string) => {
  if (!param) return null

  let parseParam = {} as ISortApply

  param.split(';').forEach(element => {
    const newElement = splitElement(element)

    parseParam = { ...parseParam, [newElement[0]]: newElement[1] }
  })

  return parseParam
}

export const parseParamFilterQuery = (param?: string) => {
  if (!param) return null

  let parseParam = {} as IFilterApply

  param.split(';').forEach((element) => {
    const newElement = splitElement(element)
    const parseItem = newElement[1].split(',')

    const optionItemInput = parseItem.reduce((acc: IRangeFilter, item: string) =>
      ({ ...acc, [item.split(':')[0]]: Number(item.split(':')[1]) }), {})

    const hasInputItem = 'from' in optionItemInput || 'to' in optionItemInput

    parseParam = { ...parseParam, [newElement[0]]: hasInputItem ? optionItemInput : parseItem }
  })

  return parseParam
}
