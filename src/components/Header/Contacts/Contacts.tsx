import React from 'react'

import adressIcon from 'img/svg/adress-icon.svg'
import callIcon from 'img/svg/call-icon.svg'
import facebookIcon from 'img/svg/facebook-icon.svg'
import instagramIcon from 'img/svg/instagram-icon.svg'
import timeIcon from 'img/svg/time-icon.svg'

import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContant}>
                <div className={styles.info}>
                    <div className={styles.adress}>
                        <img src={adressIcon} alt="adress" />
                        <p className={styles.adressText}>
                            Battersea Power Station, London SW11 8BN, Great Britain
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
                            Mon to sat: 8 am - 6pm, Sunday: 9am -4pm
                        </p>
                    </div>
                </div>

                <div className={styles.social}>
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
