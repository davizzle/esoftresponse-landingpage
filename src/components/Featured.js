import React from 'react'
import ButtonDark from './ButtonDark'
import phoneinhand from '../assets/images/phoneinhand.png'
import Mover from './Mover'

function Featured() {
  return (
    <>
      <h2 className='featured__title'>Featured</h2>
      <div className='featured__cont'>
        <div className='featured__left'>
          <h4>Project Name Here</h4>
          <p>some text here to show that we know what we are doing</p>
          <div>
          <ButtonDark text={'Read more'} />
          </div>
        </div>
        <div className='featured__right'>
          <img src={phoneinhand} alt='phone in hand' />
        </div>
      </div>
      <div className="featured__mover">
        <Mover/>
      </div>
    </>
  )
}

export default Featured
