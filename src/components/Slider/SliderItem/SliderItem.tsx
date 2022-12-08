import React, { FC } from 'react'

import { Button } from 'components/Button'

import styles from './SliderItem.module.scss'

type Props = {
    picture: any
}

export const SliderItem: FC<Props> = ({ picture }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.picture}>
                <img src={picture.img} alt="pic" />
            </div>
            <div className={styles.text}>
                <p className={styles.desk}>2 PC sectionals from only $298</p>
                <h2 className={styles.title}>Save big save now</h2>
                <Button name='Purchase now' />
            </div>
        </div>
    )
}
