import { IFilterShow } from './filterInterface'

export interface IPageData<dataInterface> {
  pageData: dataInterface,
  totalPages: number,
  currentPage: number,
  filterData?: IFilterShow
}
