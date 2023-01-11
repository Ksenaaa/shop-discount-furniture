import { Montserrat, PT_Serif as pTSerif } from '@next/font/google'
import localFont from '@next/font/local'

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  display: 'swap'
})

export const ptSerif = pTSerif({
  weight: ['400', '700'],
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
