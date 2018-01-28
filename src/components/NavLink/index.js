import React from 'react'
import Link from 'gatsby-link'

import './NavLink.scss'

const NavLink = ({ text, to }) => (
  <Link
    role='menuitem'
    className='navLink'
    activeClassName='active'
    exact to={to}
  >
    { text }
  </Link>
)

export default NavLink
