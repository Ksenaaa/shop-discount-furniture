import { Button } from 'components/Button';
import React from 'react'

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Button name='Lorem ipsum dolor ' />
    </div>
  )
}
