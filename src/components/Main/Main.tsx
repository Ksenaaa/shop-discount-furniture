import React from 'react'

import { Benefits } from './Benefits'
import { Feedback } from './Feedback'
import { MainCatalog } from './MainCatalog'
import { MainNews } from './MainNews'
import { MainSlider } from './MainSlider'
import { NewArrivals } from './NewArrivals'
import { Testimonials } from './Testimonials'

export const Main = () => {
  return (
    <>
      <MainSlider />
      <Benefits />
      <MainCatalog />
      <MainNews />
      <NewArrivals />
      <Testimonials />
      <Feedback />
    </>
  )
}
