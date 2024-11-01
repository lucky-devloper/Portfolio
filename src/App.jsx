import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Aboutpage from './Components/Aboutpage'
import ServicesPage from './Components/ServicesPage'
import Projectpage from './Components/Projectpage'
import Contectpage from './Components/Contectpage'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-[100%] h-[100%] bg-black text-white'>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <ServicesPage />
      <Projectpage />
      <Contectpage />
      <Footer />
    </div>
  )
}

export default App