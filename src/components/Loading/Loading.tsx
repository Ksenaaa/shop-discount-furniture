import React from 'react'

import styles from './Loading.module.scss'

export const Loading = () => {
    return (
        <div className={styles.wrapperLoading}>
            <div className={styles.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
