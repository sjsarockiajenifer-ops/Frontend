import React from 'react'
import Navbar from './components/Navbar'
import RestaurantHero from './components/RestaurantHero'
import MenuPreview from './components/MenuPreview'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <RestaurantHero/>
      <MenuPreview/>
      <Footer/>
    </div>
  )
}

export default App
