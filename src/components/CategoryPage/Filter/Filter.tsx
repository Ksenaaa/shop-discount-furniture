import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'

import { IFilterApply, IFilterShow, IRangeFilter } from 'interface/filterInterface'
import { addFilterCheckbox, addFilterRange } from 'utils/helpers/addFilterElement'

import { Button } from 'components/Button'

import { FilterElementCheckbox } from '../FilterElementCheckbox'
import { FilterElementRange } from '../FilterElementRange'

import styles from './Filter.module.scss'

type Props = {
  filterShow: IFilterShow,
  selectedFilter: IFilterApply | null,
  onApplyFilter: Dispatch<SetStateAction<IFilterApply | null>>,
  handleFilterSortChange: () => void
}

export const Filter: FC<Props> = ({ filterShow, selectedFilter, onApplyFilter, handleFilterSortChange }) => {
  const [checkedFilter, setCheckedFilter] = useState<IFilterApply | null>(selectedFilter)

  useEffect(() => {
    setCheckedFilter(selectedFilter)
  }, [selectedFilter])

  const handleCheckbox = useCallback((title: string, value: string) => {
    setCheckedFilter(preState => addFilterCheckbox(preState, title, value))
  }, [])

  const handleRange = useCallback((title: string, value: IRangeFilter) => {
    setCheckedFilter(preState => addFilterRange(preState, title, value))
  }, [])

  const handleApplyFilter = useCallback(() => {
    checkedFilter && onApplyFilter(checkedFilter)
    handleFilterSortChange()
  }, [checkedFilter, handleFilterSortChange, onApplyFilter])

  return (
    <div className={styles.wrapper}>
      {filterShow?.checkbox?.map(element =>
        <FilterElementCheckbox
          key={element.title}
          element={element}
          onCheck={handleCheckbox}
          selectedFilter={checkedFilter}
        />
      )}
      {filterShow?.range?.map(element =>
        <FilterElementRange
          key={element.title}
          element={element}
          onChange={handleRange}
          value={checkedFilter}
        />
      )}
      <div className={styles.filterApply}>
        <Button
          name="Apply"
          onClick={handleApplyFilter}
          isDisabled={!checkedFilter}
        />
      </div>
    </div>
  )
}
