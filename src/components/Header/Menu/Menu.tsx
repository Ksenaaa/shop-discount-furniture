import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cn from 'classnames'

import styles from './Menu.module.scss'

type Props = {
    isActiveMenu?: boolean;
}

type menuNameType = {
    id: string,
    name: string
}

export const Menu: FC<Props> = ({ isActiveMenu }) => {
    const { t, i18n } = useTranslation()

    const menuName = t('menu', { returnObjects: true }) as menuNameType[]

    return (
        <div className={cn(styles.wrapper, !isActiveMenu ? styles.wrapperMenu : styles.wrapperActiveMenu)}>
            <ol className={styles.menuList}>
                {menuName?.map(item =>
                    <li key={item.id} className={cn(styles.menuItem, i18n.language === 'ua' && styles.menuItemUa)}>
                        <a href={`/${item.id}`}>{item.name}</a>
                    </li>
                )}
            </ol>
        </div>
    )
}
