import React from 'react'
import Link from 'gatsby-link'

import './Pages.scss'
import me from './assets/me.png'

const IndexPage = () => (
  <div className='row'>
    <a href='#'><img src={me}/></a>
    <div className='bio'>
      <h1>sreejagpt.</h1>
      <h2>Full stack developer.</h2>
      <div>I like coding, cooking and painting.</div>
      <div className='inline-icons'>
        <a href='http://www.linkedin.com/in/sreeja-gupta' className='linkedin' target='_blank'/>
        <a href='https://twitter.com/sreejagpt/' className='twitter' target='_blank'/>
        <a href='https://github.com/sreejagpt' className='github' target='_blank'/>
      </div>
    </div>
  </div>
)

export default IndexPage
