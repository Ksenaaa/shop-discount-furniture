import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useToggle } from 'hooks/toggleHook'
import adressIcon from 'img/svg/adress-icon.svg'
import callIcon from 'img/svg/call-icon.svg'
import facebookIcon from 'img/svg/facebook-icon.svg'
import instagramIcon from 'img/svg/instagram-icon.svg'
import timeIcon from 'img/svg/time-icon.svg'

import { ModalWindow } from 'components/ModalWindow'

import styles from './Contacts.module.scss'

export const Contacts = () => {
    const { isOpen: isOpenModalLanguage, onToggle: onToggleModalLanguage } = useToggle()

    const { t, i18n } = useTranslation()

    const lngs = ['en', 'ua']

    const onToggleModal = useCallback(() =>
        onToggleModalLanguage()
    , [])

    const changeLanguage = useCallback((lng: string) =>
        i18n.changeLanguage(lng)
    , [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContant}>
                <div className={styles.info}>
                    <div className={styles.adress}>
                        <img src={adressIcon} alt="adress" />
                        <p className={styles.adressText}>
                            {t('contacts.adress')}
                        </p>
                    </div>
                    <div className={styles.call}>
                        <img src={callIcon} alt="call" />
                        <p className={styles.callText}>
                            +4(477) 000 8282
                        </p>
                    </div>
                    <div className={styles.time}>
                        <img src={timeIcon} alt="time" />
                        <p className={styles.timeText}>
                            {t('contacts.workingTime')}
                        </p>
                    </div>
                </div>

                <div className={styles.social}>
                    <div className={styles.wrapperLanguage}>
                        <div className={styles.language} onClick={onToggleModal}>
                            {i18n.language}
                        </div>
                        {isOpenModalLanguage &&
                            <ModalWindow
                                modalList={lngs}
                                isActive={i18n.language}
                                onChangeItem={changeLanguage}
                                onToggleModal={onToggleModalLanguage}
                                icon={false}
                            />
                        }
                    </div>
                    <div className={styles.facebookLogo}>
                        <a href="https://www.facebook.com/">
                            <img src={facebookIcon} alt="facebook"/>
                        </a>
                    </div>
                    <div className={styles.instagramLogo}>
                        <a href="https://www.instagram.com/">
                            <img src={instagramIcon} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
