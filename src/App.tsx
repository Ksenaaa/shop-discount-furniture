import React from 'react'

import { Header } from 'components/Header'
import { Slider } from 'components/Slider'

import styles from './App.module.scss'

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Slider />
        </div>
    )
}
