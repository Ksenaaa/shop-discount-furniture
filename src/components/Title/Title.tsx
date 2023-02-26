import React, { FC } from 'react'

import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import styles from './Title.module.scss'

type Props = {
  name: string,
  pathTitle?: string
}

export const Title: FC<Props> = ({ name, pathTitle }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      {pathTitle ?
        <Link href={pathTitle} className={styles.title}>
          {t(name)}
        </Link> :
        <div className={styles.title}>
          {t(name)}
        </div>
      }
    </div>
  )
}
