import React from 'react'

import { Header } from 'components/Header';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
}
