import React from 'react'
import ButtonWhite from './ButtonWhite'
import bigscreen from '../assets/images/bigscreen.png'
import phoneontable from '../assets/images/phoneontable.png'

function Expertise() {
  return (
    <div className='expertise__cont'>
      <h2>Expertise</h2>
      <div className='expertise__card-cont'>
      <div className='expertise__card'>
        <img src={bigscreen} alt="computer screen" />
        <h4>Software Development</h4>
        <p>Standard test as an overview for software developement, which includes - web dev, mobile app dev and more</p>
        <div>
          <ButtonWhite text={'Find out more'} />
        </div>
      </div>
      <div className='expertise__card'>
        <img src={bigscreen} alt="computer screen" />
        <h4>Mobile App Development</h4>
        <p>Standard test as an overview for software developement, which includes - web dev, mobile app dev and more</p>
        <div>
          <ButtonWhite text={'Find out more'} />
        </div>
      </div>
      <div className='expertise__card'>
        <img src={bigscreen} alt="computer screen" />
        <h4>Ecommerce</h4>
        <p>Standard test as an overview for software developement, which includes - web dev, mobile app dev and more</p>
        <div>
          <ButtonWhite text={'Find out more'} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Expertise
