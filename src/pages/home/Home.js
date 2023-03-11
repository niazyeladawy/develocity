import React from 'react'
import CollabrationSlider from '../../components/collabration slider/CollabrationSlider'
import EcoSystem from '../../components/eco system/EcoSystem'
import Exchanges from '../../components/exchanges/Exchanges'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Headernav from '../../components/navbar/HeaderNav'
import RoadMap from '../../components/roadmap/RoadMap'

const Home = () => {
  return (
    <div className='home'>
      <Headernav />
      <Header />
      <Featured />
      <EcoSystem/>
      <RoadMap/>
      <CollabrationSlider/>
      <Exchanges/>
      <Footer/>
    </div>
  )
}

export default Home