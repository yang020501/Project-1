import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'

import heroSliderData from '../assets/fake-data/hero-slider'
const Home = () => {
  console.log(heroSliderData)
  return (
    <Helmet title='Trang chủ'>

      <HeroSlider data={heroSliderData} />
    </Helmet>
  )
}

export default Home