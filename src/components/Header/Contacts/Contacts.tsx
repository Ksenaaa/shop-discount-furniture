import React from 'react'

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
                            10203 Kotzebue Street Suit #112, San Antonio, Texas
                        </p>
                    </div>
                    <div className={styles.call}>
                        <img src={callIcon} alt="call" />
                        <p className={styles.call_text}>
                            +1(210) 400 6938
                        </p>
                    </div>
                    <div className={styles.time}>
                        <img src={timeIcon} alt="time" />
                        <p className={styles.time_text}>
                            Mon to sat: 9 am - 7pm, Sunday: 10am -5pm
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
