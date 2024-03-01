import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="head_inner">
            <h1>Family Wellness</h1>
            <p>Massage Tharapy</p>
            <div className="opt">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>FAQ</span>
                <span>System</span>
            </div>
        </div>
    </div>
  )
}

export default Header
