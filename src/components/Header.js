import React from 'react'
import ButtonTransparent from './ButtonTransparent'
import ButtonDark from './ButtonDark'

function Header() {
  return (
    <div className="header__cont">
      <h1 className="header__title">We transform your business by building innovative digital applications</h1>
      <p>Cost effective. Scalable, Flexible Solutions</p>
      <div className="button__cont">
        <ButtonDark text={`Get in touch`}/>
        <ButtonTransparent text={`Get in touch`}/>
      </div>
    </div>
  )
}

export default Header
