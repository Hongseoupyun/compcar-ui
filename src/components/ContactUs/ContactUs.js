import React from 'react'
import "./ContactUs.scss"
export default function ContactUs() {
  return (
    <div className='contact-us'>
      <div className='meet-our-team'>
        MEET OUR TEAM
      </div>
      <div className='members-img-container'>
        <img id='contact-us-img' alt='sehwan' src={require('/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/Sehwan.jpg')}>
        </img>
        <img id='contact-us-img' alt='anna' src={require('/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/anna.jpg')}>
        </img>
        <img id='contact-us-img' alt='hongseoup' src={require('/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/simon.jpg')}>
        </img>
        <img id='contact-us-img' alt='jay' src={require('/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/Jay.jpg')}>
        </img>
      </div>
      <button className='contact-button'>
        Contact Us
      </button>
    </div>
  )
}
