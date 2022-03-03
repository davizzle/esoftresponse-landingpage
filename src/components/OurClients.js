import React from 'react'
import subway from '../assets/images/subway.png'
import spectanota from '../assets/images/Group-95 1.png'
import cubiclease from '../assets/images/cubic lease.png'
import myownhome from '../assets/images/Logo 1.png'
import inspirationalrisk from '../assets/images/image-12 1.png'

function OurClients() {
  return (
    <div className="ourClients__cont">
     <div className="ourClients__text">
     <h2>Who we help</h2>
     <p>Our clients range from large, complex global innovators to fast moving disruptive startups.</p>
     </div>
     <div className="ourClients__logos">
      <div><img src={subway} alt="subway logo" /></div>
      <div><img src={spectanota} alt="spectanota logo" /></div>
      <div><img src={cubiclease} alt="cubic lease logo" /></div>
      <div><img src={myownhome} alt=" my own home logo" /></div>
      <div><img src={inspirationalrisk} alt="inspirational risk logo" /></div>
     </div>
    </div>
  )
}

export default OurClients