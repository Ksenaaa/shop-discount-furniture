import React, { ChangeEvent, useCallback, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { IFormSignup } from 'interface/formSignupInterface'

import { Button } from 'components/Button'

import { placeholderForm } from './constants/placeholderForm'

import styles from './FormSignup.module.scss'

export const FormSignup = () => {
  const [input, setInput] = useState<IFormSignup>({
    userName: '',
    phone: '',
    email: ''
  })

  const { t } = useTranslation()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const sendForm = useCallback(() => {
    setInput({
      userName: '',
      phone: '',
      email: ''
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.desc}>
          {t('dailySalesSignup.text')}
        </div>
        <div className={styles.fields}>
          <input
            type="text"
            name={placeholderForm.userName.name}
            onChange={onChange}
            value={input?.userName}
            placeholder={t(placeholderForm.userName.placeholder) || ''}
          />
          <input
            type="text"
            name={placeholderForm.phone.name}
            onChange={onChange} value={input?.phone}
            placeholder={t(placeholderForm.phone.placeholder) || ''}
          />
          <input
            type="text"
            name={placeholderForm.email.name}
            onChange={onChange} value={input?.email}
            placeholder={t(placeholderForm.email.placeholder) || ''}
          />
        </div>
        <Button name={t('dailySalesSignup.button')} onClick={sendForm} />
      </div>
    </div>
  )
}
