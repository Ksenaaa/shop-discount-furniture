import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import arrowIcon from 'img/svg/arrow-down-icon.svg'
import sortIcon from 'img/svg/sort-icon.svg'
import { ISortApply } from 'interface/sortInterface'
import { SORT_ORDER, optionsSort } from 'utils/constants/sort'

import { ModalSelect } from 'components/ModalSelect'

import styles from './Sort.module.scss'

type Props = {
  selectedOptions: ISortApply | null,
  onApplySort: Dispatch<SetStateAction<ISortApply | null>>,
  handleFilterSortChange: () => void
}

export const Sort: FC<Props> = ({ selectedOptions, onApplySort, handleFilterSortChange }) => {
  const { isOpen: isOpenModalSort, onToggle: toggleModalSort } = useToggle()

  const changeSortOption = useCallback((option: string) => {
    onApplySort({ option, method: SORT_ORDER.asc })
    handleFilterSortChange()
  }, [handleFilterSortChange, onApplySort])

  const changeSortOrder = () => {
    onApplySort(preState => {
      if (!preState) return null

      const methodValue = preState.method === SORT_ORDER.asc ? SORT_ORDER.desc : SORT_ORDER.asc

      return { ...preState, method: methodValue }
    })
    handleFilterSortChange()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.sortOption}>
        <div className={styles.option} onClick={toggleModalSort}>
          <h4>Sort by:</h4>
          {selectedOptions?.option}
          <Image src={arrowIcon} alt="arrow" />
        </div>
        {selectedOptions &&
          <div
            className={cn(styles.sortOrder, { [styles.sortOrderAsc]: selectedOptions.method === SORT_ORDER.asc })}
            onClick={changeSortOrder}
          >
            <Image src={sortIcon} alt="sort" />
          </div>
        }
      </div>

      {isOpenModalSort &&
        <ModalSelect
          modalList={optionsSort}
          activeItem={selectedOptions && selectedOptions.option}
          onChangeItem={changeSortOption}
          onToggleModal={toggleModalSort}
          isIconVisible={false}
        />
      }
    </div>
  )
}
