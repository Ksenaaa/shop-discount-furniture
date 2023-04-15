import React, { PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import Image from 'next/image'

import cn from 'classnames'

import { useToggle } from 'hooks/toggleHook'
import closeIcon from 'img/svg/close-icon.svg'
import { scrollController } from 'utils/helpers/scrollController'

import { timeAnimation } from './constants/timeAnimation'

import styles from './Modal.module.scss'

type Props = {
  onClose: () => void,
}

export const Modal = ({ onClose, children }: PropsWithChildren<Props>) => {
  const { isOpen: isBrowser, onToggle: toggleBrowser } = useToggle()
  const { isOpen: isActiveStyle, onToggle: toggleActiveStyle } = useToggle()

  const modalWrapperRef = useRef<HTMLDivElement>(null)

  const handleCloseModal = useCallback(() => {
    toggleActiveStyle()
    scrollController.enabledScroll()
    setTimeout(() => onClose(), timeAnimation)
  }, [onClose, toggleActiveStyle])

  const handleBackDrop = useCallback((e: Event) => {
    const input = e.target as HTMLDivElement

    if (modalWrapperRef.current && !modalWrapperRef.current.contains(input)) {
      handleCloseModal()
    }
  }, [handleCloseModal])

  useEffect(() => {
    toggleBrowser()
    scrollController.disabledScroll()
    setTimeout(() => toggleActiveStyle(), timeAnimation)
    window.addEventListener('click', handleBackDrop)

    return () => {
      window.removeEventListener('click', handleBackDrop)
    }
  }, [handleBackDrop, toggleBrowser, toggleActiveStyle])

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={styles.overlay}>
        <div className={cn(styles.modalWrapper, isActiveStyle && styles.active)} ref={modalWrapperRef}>
          <div className={styles.close} onClick={handleCloseModal}>
            <Image src={closeIcon} alt="close" />
          </div>
          <div className={styles.modal}>
            {children}
          </div>
        </div>
      </div>
      , document.getElementById('modal-root') as HTMLElement
    )
  } else {
    return null
  }
}
