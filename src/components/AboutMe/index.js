import React from 'react'
import './AboutMe.scss'
import me from './assets/me.png'

const AboutMe = () => (
  <div className='row'>
    <span><img src={me}/></span>
    <div className='column'>
      <h1>sreejagpt.</h1>
      <h2>Full stack developer.</h2>
      <div className='inline-icons'>
        <a href='http://www.linkedin.com/in/sreeja-gupta' className='linkedin' target='_blank'/>
        <a href='https://twitter.com/sreejagpt/' className='twitter' target='_blank'/>
        <a href='https://github.com/sreejagpt' className='github' target='_blank'/>
      </div>
    </div>
  </div>
)

export default AboutMe

