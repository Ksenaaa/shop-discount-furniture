import React, { FC, useRef, useState } from 'react'

import facebookIcon from 'img/svg/facebook-icon.svg'
import instagramIcon from 'img/svg/instagram-icon.svg'
import adressIcon from 'img/svg/adress-icon.svg'
import callIcon from 'img/svg/call-icon.svg'
import timeIcon from 'img/svg/time-icon.svg'

import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_contant}>
                <div className={styles.info}>
                    <div className={styles.adress}>
                        <img src={adressIcon} alt="adress" />
                        <p className={styles.adress_text}>
                            Battersea Power Station, London SW11 8BN, Great Britain
                        </p>
                    </div>
                    <div className={styles.call}>
                        <img src={callIcon} alt="call" />
                        <p className={styles.call_text}>
                            +4(477) 000 8282
                        </p>
                    </div>
                    <div className={styles.time}>
                        <img src={timeIcon} alt="time" />
                        <p className={styles.time_text}>
                            Mon to sat: 8 am - 6pm, Sunday: 9am -4pm
                        </p>
                    </div>
                </div>

                <div className={styles.social}>
                    <div className={styles.facebook_logo}>
                        <a href="https://www.facebook.com/">
                            <img src={facebookIcon} alt="facebook"/>
                        </a>
                    </div>
                    <div className={styles.instagram_logo}>
                        <a href="https://www.instagram.com/">
                            <img src={instagramIcon} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
