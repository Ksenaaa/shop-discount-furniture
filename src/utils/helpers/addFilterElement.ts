import { IFilterApply, IRangeFilter } from 'interface/filterInterface'

export const addFilterCheckbox = (prevState: IFilterApply | null, title: string, value: string) => {
  if (!prevState) return { [title]: [value] }

  const removeElement = Object.fromEntries(Object.entries(prevState).filter(element => element[0] !== title))
  const preTitle = prevState[title as keyof IFilterApply] as string[] || []
  const hasValue = preTitle?.find(filterValue => value === filterValue)
  const removeValue = preTitle.filter(filterValue => value !== filterValue)

  if (hasValue) {
    if (preTitle.length > 1) {
      return { ...prevState, [title]: [...removeValue] }
    }

    return { ...removeElement }
  }

  return { ...prevState, [title]: [...preTitle, value] }
}

export const addFilterRange = (prevState: IFilterApply | null, title: string, value: IRangeFilter) => {
  if (!prevState) return { [title]: value }

  const removeElement = Object.fromEntries(Object.entries(prevState).filter(element => element[0] !== title))
  const preTitleInput = prevState[title as keyof IFilterApply] as IRangeFilter || {}
  const sumItemOptionInput = Object.values({ ...preTitleInput, ...value as IRangeFilter } as number[])
    .reduce((sum: number, item: number) => sum + item, 0)
  const newValue = Object.keys(preTitleInput)[0] === 'from' ?
    { ...preTitleInput, ...value as IRangeFilter } :
    { ...value as IRangeFilter, ...preTitleInput }

  if (sumItemOptionInput === 0) {
    return removeElement
  }

  return { ...prevState, [title]: newValue }
}
