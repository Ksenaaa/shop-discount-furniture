import React, { useState } from 'react'
import cn from 'classnames'

import { Search } from '../Search'
import logoIcon from 'img/svg/logo.svg'
import logoName from 'img/svg/logo-name.svg'
import heartIcon from 'img/svg/heart-icon.svg'
import orangeHeartIcon from 'img/svg/heart-icon-orange.svg'
import basketIcon from 'img/svg/basket-icon.svg'
import orangeBasketIcon from 'img/svg/basket-icon-orange.svg'

import styles from './MiddleHeader.module.scss'

export const MiddleHeader = () => {
    const [activeSearch, setActiveSearch] = useState(false)

    const onActiveSearch = () => {
        setActiveSearch(true)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={logoIcon} alt="furniture f" />
                    <img src={logoName} alt="furniture f" />
                </a>
            </div> 
            <div className={cn(styles.search, activeSearch && styles.searchActive)} onClick={onActiveSearch}>
                <Search />  
            </div>
            <div className={styles.selectedUser}>
                <div className={styles.heart}>
                    <img src={heartIcon} alt="heart" className={styles.blueHeart}/>
                    <img src={orangeHeartIcon} alt="heart" className={styles.orangeHeart}/>
                </div>
                <div className={styles.basket}>
                    <img src={basketIcon} alt="basket" className={styles.blueBasket}/>
                    <img src={orangeBasketIcon} alt="basket" className={styles.orangeBasket}/>
                </div>
            </div>   
        </div>
    )
}
