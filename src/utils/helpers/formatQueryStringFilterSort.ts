import { IFilterApply } from 'interface/filterInterface'
import { ISortApply } from 'interface/sortInterface'

export const formatQueryStringFilterSort = (params: IFilterApply | ISortApply | null) => {
  if (!params || Object.keys(params).length === 0) return ''

  return `${Object.entries(params)
    .map(([key, value]) => Array.isArray(value) || typeof value === 'string' ?
      `${key}=${value}` :
      `${key}=${Object.entries(value).map(i => i.join(':'))}`)
    .join(';')
  }`
}
