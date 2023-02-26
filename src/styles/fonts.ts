import { EB_Garamond as EBGaramond, Raleway } from '@next/font/google'
import localFont from '@next/font/local'

export const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  display: 'swap'
})

export const garamond = EBGaramond({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  display: 'swap'
})

export const centuryGothic = localFont({
  src: [
    {
      path: './../../public/fonts/GOTHIC.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../../public/fonts/GOTHICB.woff',
      weight: '700',
      style: 'normal'
    }
  ]
})
