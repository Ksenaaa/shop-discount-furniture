import React, { useEffect } from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { timeoutTransition } from 'utils/constants/timeoutTransition'

const Error = () => {
  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), timeoutTransition)
  }, [router])

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <h1>404</h1>
      <h2>{t('error.404')}</h2>
    </div>
  )
}

export default Error

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})
