import React from 'react'
import ButtonTransparent from './ButtonTransparent'
import './styles.css'
import logo from '../assets/images/eSoft-white 1.png'

function Nav() {
  return (
    <div className="nav__cont">
     <div className="nav__logo">
      <img src={logo} alt="esoft logo" />
     </div>
     <div className="nav__route-cont">
       <div>Home</div>
       <div>About</div>
       <div>Expertise</div>
       <div>Work</div>
       <div>Insight</div>
       <div>Careers</div>
       <div>Contact</div>
     </div>
     <div className="nav__button">
      <ButtonTransparent text={`Let's work together`}/>
     </div>
    </div>
  )
}

export default Nav