import React, { FC, MouseEvent } from 'react'

import { IFilterApply, IFilterShowCheckbox } from 'interface/filterInterface'

import { Checkbox } from 'components/Checkbox'

import styles from './FilterElementCheckbox.module.scss'

type Props = {
  element: IFilterShowCheckbox,
  selectedFilter: IFilterApply | null,
  onCheck: (title: string, value: string) => void
}

export const FilterElementCheckbox: FC<Props> = ({ element, onCheck, selectedFilter }) => {
  const handleCheck = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement

    input.value && onCheck(element.title, input.value)
  }

  const selectedValue = selectedFilter && selectedFilter[element.title as keyof IFilterApply] as string[] || []

  return (
    <div className={styles.filterElement} onClick={handleCheck}>
      <div className={styles.title}>
        {element.title}
      </div>

      <div className={styles.items}>
        {element.value?.map(item =>
          <div className={styles.item} key={item.name}>
            <Checkbox
              type="checkbox"
              labelName={item.name}
              value={item.name}
              checked={selectedValue.includes(item.name)}
            />
            <div className={styles.count}>
              {item.count}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
