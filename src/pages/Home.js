import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Expertise from '../components/Expertise'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import OurClients from '../components/OurClients'

function Home() {
  return (
    <>
    <Nav/>
    <Header/>
    <OurClients/>
    <Expertise/>
    <Featured/>
    <Footer/>
    </>
  )
}

export default Home