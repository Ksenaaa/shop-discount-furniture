import React, { ChangeEvent, useCallback, useState } from 'react'

import { IFeedbackForm } from 'interface/feedbackFormInterface'

import { Button } from 'components/Button'

import { SimpleMap } from './map/SimpleMap'

import styles from './Feedback.module.scss'

export const Feedback = () => {
  const [input, setInput] = useState<IFeedbackForm>({
    name: '',
    phone: '',
    other: ''
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(preState => ({ ...preState, [e.target.name]: e.target.value }))
  }

  const sendForm = useCallback(() => {
    setInput({
      name: '',
      phone: '',
      other: ''
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.title}>
          Feedback form
        </div>
        <div className={styles.desc}>
          Submit your contact details and we will contact you shortly
        </div>
        <div className={styles.fields}>
          <input type="text" name="name" onChange={onChange} value={input?.name} placeholder="Name" />
          <input type="text" name="phone" onChange={onChange} value={input?.phone} placeholder="Phone Number*" />
          <input type="text" name="other" onChange={onChange} value={input?.other} placeholder="Other" />
        </div>
        <Button name="Contact me" onClick={sendForm} />
      </div>
      <div className={styles.map}>
        <SimpleMap />
      </div>
    </div>
  )
}
