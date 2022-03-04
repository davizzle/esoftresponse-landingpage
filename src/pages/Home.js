import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Expertise from '../components/Expertise'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import OurClients from '../components/OurClients'
import Testimonials from '../components/Testimonials'
import Insights from '../components/Insights'

function Home() {
  return (
    <>
    <Nav/>
    <Header/>
    <OurClients/>
    <Expertise/>
    <Featured/>
    <Testimonials/>
    <Insights/>
    <Footer/>
    </>
  )
}

export default Home