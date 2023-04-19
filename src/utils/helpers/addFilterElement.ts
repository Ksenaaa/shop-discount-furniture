import { IFilterApply, IRangeFilter } from 'interface/filterInterface'

export const addFilterCheckbox = (prevState: IFilterApply | null, title: string, value: string) => {
  if (!prevState) return { [title]: [value] }

  const newPrevState = JSON.parse(JSON.stringify(prevState))
  const prevTitleValue = newPrevState[title] as string[] || []
  const hasValue = prevTitleValue?.find(filterValue => value === filterValue)
  const removeValue = prevTitleValue?.filter(filterValue => value !== filterValue)

  if (hasValue) {
    if (prevTitleValue?.length > 1) {
      return { ...newPrevState, [title]: [...removeValue] }
    } else delete newPrevState[title]

    if (Object.keys(newPrevState).length === 0) return null

    return newPrevState
  }

  return { ...newPrevState, [title]: [...prevTitleValue, value] }
}

export const addFilterRange = (prevState: IFilterApply | null, title: string, value: IRangeFilter) => {
  if (!prevState) return { [title]: value }

  const newPrevState = JSON.parse(JSON.stringify(prevState))
  const preTitleInput = newPrevState[title] as IRangeFilter || {}
  const sumItemOptionInput = Object.values({ ...preTitleInput, ...value as IRangeFilter } as number[])
    .reduce((sum: number, item: number) => sum + item, 0)

  let newValue = { ...preTitleInput, ...value }

  if (Object.keys(newValue).length > 1) {
    const from = newValue.from
    const to = newValue.to

    newValue = { from, to }
  }

  if (sumItemOptionInput === 0) {
    delete newPrevState[title]

    if (Object.keys(newPrevState).length === 0) return null

    return newPrevState
  }

  return { ...newPrevState, [title]: newValue }
}
