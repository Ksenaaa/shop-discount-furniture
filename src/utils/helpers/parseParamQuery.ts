import { IFilterApply, IRangeFilter } from 'interface/filterInterface'
import { ISortApply } from 'interface/sortInterface'

export const parseParamSortQuery = (param: string | undefined) => {
  if (!param) return null

  let parseParam = {} as ISortApply

  (param as string).split(';').forEach((element: string) => {
    const newElement = element.split('=')

    parseParam = { ...parseParam, [newElement[0]]: newElement[1] }
  })

  return parseParam
}

export const parseParamFilterQuery = (param: string | undefined) => {
  if (!param) return null

  let parseParam = {} as IFilterApply

  (param as string).split(';').forEach((element: string) => {
    const newElement = element.split('=')
    const parseItem = newElement[1].split(',')
    const optionItemInput = parseItem.reduce((acc: IRangeFilter, i: string) =>
      ({ ...acc, [i.split(':')[0]]: Number(i.split(':')[1]) }), {})
    const hasInputItem = Object.keys(optionItemInput).includes('from') || Object.keys(optionItemInput).includes('to')

    parseParam = { ...parseParam, [newElement[0]]: hasInputItem ? optionItemInput : parseItem }
  })

  return parseParam
}
