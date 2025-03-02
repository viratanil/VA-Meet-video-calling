import React from 'react'
import Navbar from "./Navbar"
import Faq from "./Faq"
import PartnerLogo from './PartnerLogo'
import Hero from './Hero'
import Footer from './Footer'
import Testimonial from './Testimonial'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PartnerLogo/> 
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home