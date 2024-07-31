import Hero from '@/components/Hero'
import Navbar from '../components/Navbar'
import React from 'react'
import Howitworks from '@/components/Howitworks'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import CtaBanner from '@/components/CtaBanner'
import Tesimonial from '@/components/Tesimonial'

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Howitworks/>
      <Tesimonial/>
      <CtaBanner/>
      <Footer/>
    </>
  )
}

export default Index