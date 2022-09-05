import React from 'react'
import {Link} from 'react-router-dom'
import homepageLogo from '../../assets/homepage-logo.png'
import './Header.css'

function Header() {
  return (
    <header>
    <Link to='/'>
        <img src={homepageLogo} alt="go to homepage" />
    </Link>
    </header>
  )
}

export default Header