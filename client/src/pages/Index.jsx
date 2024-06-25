import Hero from '@/components/Hero'
import Navbar from '../components/Navbar'
import React from 'react'
import Howitworks from '@/components/Howitworks'
import Services from '@/components/Services'

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Howitworks/>
    </>
  )
}

export default Index