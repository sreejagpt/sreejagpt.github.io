import React from 'react'
import Link from 'gatsby-link'

import NavLink from '../NavLink'
import './Header.scss'

const Header = () => (
  <div
    className='header'
    role='navigation'>

    <NavLink to='/' text='Hi.'/>
    <NavLink to='/projects' text='Projects.'/>
    <NavLink to='/page-3' text='Talks.'/>
  </div>
)

export default Header
