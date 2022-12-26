import React from 'react'

import searchIcon from 'img/svg/search-logo.svg'

import styles from './Search.module.scss'

export const Search = () => {
    return (
        <div className={styles.wrapper}>
            <form action="">
                <input type="text" name="search" className={styles.input} placeholder="I search..."/>
            </form>
            <img src={searchIcon} alt="search" />
        </div>
    )
}
