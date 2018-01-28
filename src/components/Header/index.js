import React from 'react'
import Link from 'gatsby-link'

import { styles } from './Header.style'

import NavLink from '../NavLink' 

const Header = () => (
  <div
    css={styles.header}
    role='navigation'>

    <NavLink to='/' text='Hi.'/>
    <NavLink to='/projects' text='Projects.'/>
    <NavLink to='/page-3' text='Talks.'/>
  </div>
)

export default Header
