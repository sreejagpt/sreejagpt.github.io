import React from 'react'
import Link from 'gatsby-link'

import NavLink from '../NavLink'
import './NavTabs.scss'

const NavTabs = () => (
  <footer className='root'>
    <NavLink to='/' text='✌🏼 Hi.'/>
    <NavLink to='/projects' text='🏅 Projects.'/>
    <NavLink to='/page-3' text='🎤 Talks.'/>
  </footer>
)

export default NavTabs
