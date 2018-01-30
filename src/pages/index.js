import React from 'react'
import Link from 'gatsby-link'

import './Pages.scss'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import twitter from './assets/twitter.png'
import me from './assets/me.png'

const IndexPage = () => (
  <div>
    <h1>My name is sreejagpt.</h1>
    <div className='row'>
      <a href='//www.linkedin.com/in/sreeja-gupta'><img src={linkedin}/></a>
      <a href='//https://twitter.com/sreejagpt'><img src={twitter}/></a>
      <a href='//https://github.com/sreejagpt'><img src={github}/></a>
      <a href='#'><img src={me}/></a>
    </div>
  </div>
  )

export default IndexPage
