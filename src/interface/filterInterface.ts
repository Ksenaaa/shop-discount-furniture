export interface IFilterShow {
  checkbox: IFilterShowCheckbox[],
  range: IFilterShowRange[]
}

export interface IFilterShowCheckbox {
  title: string,
  value: {
    name: string,
    count: number
  }[]
}

export interface IFilterShowRange {
  title: string,
  value: IRangeFilter,
  count: number
}

export interface IFilterApply {
  type?: string[],
  color?: string[],
  material?: string[],
  price?: IRangeFilter
}

export interface IRangeFilter {
  from?: number,
  to?: number,
}
