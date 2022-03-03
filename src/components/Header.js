import React from 'react'
import ButtonLight from './ButtonLight'
import ButtonDark from './ButtonDark'

function Header() {
  return (
    <>
      <h1>We transform your business by building innovative digital solutions</h1>
      <div>
        <ButtonLight />
        <ButtonDark />
      </div>
    </>
  )
}

export default Header
