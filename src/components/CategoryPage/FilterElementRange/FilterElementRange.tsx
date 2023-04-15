import React, { ChangeEvent, FC } from 'react'

import { IFilterApply, IFilterShowRange, IRangeFilter } from 'interface/filterInterface'

import { Range } from 'components/Range'

import styles from './FilterElementRange.module.scss'

type Props = {
  value: IFilterApply | null,
  element: IFilterShowRange,
  onChange: (title: string, value: IRangeFilter) => void
}

export const FilterElementRange: FC<Props> = ({ value, element, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement

    onChange(element.title, { [input.name]: Number(input.value) })
  }

  return (
    <div className={styles.filterElement}>
      <div className={styles.elementHeader}>
        <div className={styles.title}>
          {element.title}
        </div>
        <div className={styles.count}>
          {element.count}
        </div>
      </div>
      <div className={styles.item}>
        <Range
          value={value && value[element.title as keyof IFilterApply] as IRangeFilter}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
