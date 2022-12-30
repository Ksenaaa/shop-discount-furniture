import React, { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import searchIcon from 'img/svg/search-logo.svg'

import styles from './Search.module.scss'

export const Search = () => {
    const [text, setText] = useState('')

    const { t } = useTranslation()

    const placeholder = t('search.iSearch')

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    return (
        <div className={styles.wrapper}>
            <form action="">
                <input
                    type="text"
                    name="search"
                    className={styles.input}
                    placeholder={placeholder}
                    onChange={onChangeText}
                    value={text}
                />
            </form>
            <img src={searchIcon} alt="search" />
        </div>
    )
}
