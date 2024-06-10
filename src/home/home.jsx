import React from 'react'
import Banner from './Banner'
import Historique from './Historique'
import HomeCategory from './homeCategory'
import Contact from './contact'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Historique/>
        <HomeCategory/>
        <Contact/>
    </div>
  )
}

export default Home