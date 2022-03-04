import React from 'react'
import ButtonWhite from './ButtonWhite'
import bigscreen from '../assets/images/bigscreen.png'
import phoneontable from '../assets/images/phoneontable.png'
import screen from '../assets/images/laptopscreen.png'

function Insights() {
  return (
    <div className='insights__cont'>
      <h2>Insights</h2>
      <div className='insights__card-cont'>
      <div className='insights__card'>
        <img src={bigscreen} alt="computer screen" />
        <h4>Write the title here</h4>
      </div>
      <div className='insights__card'>
        <img src={phoneontable} alt="computer screen" />
        <h4>write the title here</h4>
      </div>
      <div className='insights__card'>
        <img src={screen} alt="computer screen" />
        <h4>Write the title here</h4>
      </div>
    </div>
    </div>
  )
}

export default Insights
