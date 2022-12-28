import React, { FC, useCallback } from 'react'

import cn from 'classnames'

import { ModalWindowItem } from './ModalWindowItem'

import styles from './ModalWindow.module.scss'

type Props = {
    modalList: string[],
    isActive: string,
    onChangeItem: (item: string) => void,
    onToggleModal: () => void,
    icon: boolean
}

export const ModalWindow: FC<Props> = ({ modalList, isActive, onChangeItem, onToggleModal, icon }) => {
    const onClickItem = useCallback((itemModal: string) => {
        onChangeItem(itemModal)
        onToggleModal()
    }, [])

    const onCloseModal = () => onToggleModal()

    return (
        <>
            <ul className={cn(styles.modalList, icon && styles.modalListWithIcon)}>
                {modalList.map((item, i) =>
                    <ModalWindowItem
                        key={i}
                        item={item}
                        isActive={isActive}
                        onClickItem={onClickItem}
                        icon={icon}
                    />
                )}
            </ul>
            <div className={styles.substrate} onClick={onCloseModal}></div>
        </>
    )
}
