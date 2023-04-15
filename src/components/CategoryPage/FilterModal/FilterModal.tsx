import React, { PropsWithChildren } from 'react'

import { useToggle } from 'hooks/toggleHook'

import { Button } from 'components/Button'
import { Modal } from 'components/Modal'

export const FilterModal = ({ children }: PropsWithChildren) => {
  const { isOpen: isOpenModalFilter, onToggle: toggleModalFilter } = useToggle()

  return (
    <>
      <Button name="Filter" onClick={toggleModalFilter} isDisabled={isOpenModalFilter} />
      {isOpenModalFilter &&
        <Modal onClose={toggleModalFilter}>
          {children}
        </Modal>
      }
    </>
  )
}
