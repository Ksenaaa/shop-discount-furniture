import React from 'react'

import { FormSignup } from './FormSignup'
import { MainCatalog } from './MainCatalog'
import { MainNews } from './MainNews'
import { MainSlider } from './MainSlider'
import { Map } from './Map/Map'
import { NewArrivals } from './NewArrivals'
import { Sale } from './Sale'
import { Testimonials } from './Testimonials'

export const Main = () => {
  return (
    <>
      <MainSlider />
      <Sale />
      <MainCatalog />
      <MainNews />
      <NewArrivals />
      <FormSignup />
      <Map />
      <Testimonials />
    </>
  )
}
