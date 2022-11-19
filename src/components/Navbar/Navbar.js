import React from 'react'
import logo from '../../assets/logo.png'
import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='img-wrapper'> 
      <img className='logo' src={logo} alt="logo" />
      </div>
      <div className='content-wrapper'>
        <div className='find-a-car'>
          Find a car
        </div>
        <div className='deals'>
          Deals
        </div>
        <div className='contact'>
          Contact
        </div>
        <button className='sign-in'>
          Sign in
        </button>
      </div>
    </div>
  )
}