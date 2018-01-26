import React from 'react'
import Link from 'gatsby-link'

import { styles } from './NavLink.style'

const NavLink = ({ text, to }) => (
  <Link
    role='menuitem'
    activeStyle={ styles.navLink.active }
    css={ styles.navLink }
    exact to={to}
  >
    { text }
  </Link>
)

export default NavLink
