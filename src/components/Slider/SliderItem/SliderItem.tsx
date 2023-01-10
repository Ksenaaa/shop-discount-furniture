import React, { FC } from 'react'

import Image from 'next/image'

import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { IImgSlider } from 'interface/sliderInterface'
import { LanguageName } from 'utils/constants/languages'

import { Button } from 'components/Button'

import styles from './SliderItem.module.scss'

type Props = {
  picture: IImgSlider
}

export const SliderItem: FC<Props> = ({ picture }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className={cn(styles.wrapper, { [styles.wrapperUa]: i18n.language === LanguageName.UA })}>
      <Image src={picture.img} alt={picture.name} fill className={styles.picture}/>
      <div className={styles.text}>
        <p className={styles.desk}>{t('slider.desk')}</p>
        <h2 className={styles.title}>{t('slider.title')}</h2>
        <Button name={t('button.sliderItem')} />
      </div>
    </div>
  )
}
