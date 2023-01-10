import React from 'react'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'
import store from 'store'

import { Layout } from 'components/Layout'

import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default appWithTranslation(App)
