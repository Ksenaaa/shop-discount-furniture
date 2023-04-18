import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'

import { useGetTestimonialsQuery } from 'store/services/testimonials'
import { firstNumberPage } from 'utils/constants/firstNumberPage'

import { TestimonialsCard } from 'components/TestimonialsCard'

import styles from './Index.module.scss'

export const Testimonials = () => {
  const { data } = useGetTestimonialsQuery({
    page: firstNumberPage,
    limit: 0
  })

  return (
    <div className={styles.wrapper}>
      <ul className={styles.cards}>
        {data?.pageData.map(item =>
          <TestimonialsCard
            item={item}
            key={item.id}
          />
        )}
      </ul>
    </div>
  )
}

export default Testimonials

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
