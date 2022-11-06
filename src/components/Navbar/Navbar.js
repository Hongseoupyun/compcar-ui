import React from 'react'
import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className='navbar-container'>
      <img className='logo' src={require('/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/logo.png')} alt="logo" />
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
