import React from 'react'
import classNames from 'classnames'
import './Pages.scss'
import AboutMe from '../components/AboutMe'
import projects from './projects.png'
import talks from './talks.png'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: false,
      talks: false,
    }
  }
  
  handleProjectsSelected = () => { 
    this.setState({ projects: !this.state.projects, talks: false })
  }

  isProjectsSelected = () => this.state.projects === true;

  handleTalksSelected = () => { 
    this.setState({ talks: !this.state.talks, projects: false })
  }

  isTalksSelected = () => this.state.talks === true;

  render() {
    return (
      <div>
        <div className='verticalTimeline'>
          <AboutMe/>

          <div className={ classNames({ projects: true, selected: this.isProjectsSelected() }) } onClick={ this.handleProjectsSelected }>

            <div className='inline-heading'>
              <img src={projects}/>
              <div className='inline-text'>Projects.</div> 
            </div>
          </div>
          <div className={ classNames({ talks: true, selected: this.isTalksSelected() }) } onClick={ this.handleTalksSelected }>
            <img src={talks}/>
            <div className='inline-text'>Talks.</div>
          </div>
        </div>
      </div>
    );
  }

}


export default IndexPage
