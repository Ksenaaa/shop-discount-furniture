import React, { ChangeEvent, FC } from 'react'

import { IRangeFilter } from 'interface/filterInterface'

import styles from './Range.module.scss'

type Props = {
  value: IRangeFilter | null,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Range: FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input type="text" name="from" value={value?.from || ''} placeholder="from..." onChange={onChange} />
      <input type="text" name="to" value={value?.to || ''} placeholder="to..." onChange={onChange} />
    </div>
  )
}
