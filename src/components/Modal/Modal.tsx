import React, { FC, useCallback } from 'react'

import cn from 'classnames'

import { ModalItem } from './ModalItem'

import styles from './Modal.module.scss'

type Props = {
  modalList: string[],
  activeItem: string,
  onChangeItem: (item: string) => void,
  onToggleModal: () => void,
  isIconVisible: boolean
}

export const Modal: FC<Props> = ({ modalList, activeItem, onChangeItem, onToggleModal, isIconVisible }) => {
  const handlerClickItem = useCallback((itemName: string) => {
    onChangeItem(itemName)
    onToggleModal()
  }, [onChangeItem, onToggleModal])

  return (
    <>
      <ul className={cn(styles.modalList, isIconVisible && styles.modalListWithIcon)}>
        {modalList.map((item, i) =>
          <ModalItem
            key={i}
            item={item}
            activeItem={activeItem}
            onClickItem={handlerClickItem}
            isIconVisible={isIconVisible}
          />
        )}
      </ul>
      <div className={styles.substrate} onClick={onToggleModal}></div>
    </>
  )
}
