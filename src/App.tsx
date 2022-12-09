import React from 'react'

import { Header } from 'components/Header';

import styles from './App.module.scss';
import { Slider } from 'components/Slider';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Slider />
    </div>
  )
}
