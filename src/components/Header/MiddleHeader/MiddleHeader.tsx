import React from 'react'

import { Search } from '../Search'
import logoIcon from 'img/svg/logo-part.svg'
import heartIcon from 'img/svg/heart-icon.svg'
import basketIcon from 'img/svg/basket-icon.svg'

import styles from './MiddleHeader.module.scss'

export const MiddleHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={logoIcon} alt="discount furniture" />
                </a>
            </div> 
            <div className={styles.search}>
                <Search />  
            </div>
            <div className={styles.selectedUser}>
                <img src={heartIcon} alt="heart" />
                <img src={basketIcon} alt="basket" />
            </div>   
        </div>
    )
}
