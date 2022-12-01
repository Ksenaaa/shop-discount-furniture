import React, { FC } from 'react'

import styles from './Button.module.scss'

type Props = {
    name: string
}

export const Button: FC<Props> = ({name}) => {
    return (
        <button className={styles.wrapper}>{name}</button>
    )
}
