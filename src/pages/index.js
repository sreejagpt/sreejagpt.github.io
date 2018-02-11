import React from 'react'
import './Pages.scss'
import AboutMe from '../components/AboutMe'
import projects from './projects.png'
import talks from './talks.png'

const IndexPage = () => (
  <div>
    <div className='verticalTimeline'>
      <AboutMe/>

      <div className='projects'>
        <div className='inline-heading'>
          <img src={projects}/>
          <div className='inline-text'>Projects.</div>

          
        </div>
      </div>

      <div className='talks'>
        <img src={talks}/>
        <div className='inline-text'>Talks.</div>
      </div>
    </div>
  </div>
)

export default IndexPage
