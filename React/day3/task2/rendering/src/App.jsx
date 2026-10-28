import React from 'react'
import ProductHero from './components/ProductHero'
import ProductInfo from './components/ProductInfo'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <ProductHero/>
      <ProductInfo/>
      <Footer/>
    </div>
  )
}

export default App
