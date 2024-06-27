import Hero from '@/components/Hero'
import Navbar from '../components/Navbar'
import React from 'react'
import Howitworks from '@/components/Howitworks'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Howitworks/>
      <Footer/>
    </>
  )
}

export default Index