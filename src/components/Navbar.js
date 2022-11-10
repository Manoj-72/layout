import React from 'react'
import '../Styles/Navbar.css'

export default function Navbar()  {
  return (
    <div className='Navbar'>
        <div className='Nav-links'>
         <p className='Nav-list'>Home</p>
         <p className='Nav-list'>Data explorer</p>
         <p className='Nav-list'>Report & Resources</p>
         <p className='Nav-list'>Do you know gen Z?</p>
        <button className='Nav-button'>Share</button>
        </div>
    </div>
  )
}
