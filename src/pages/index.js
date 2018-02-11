import React from 'react';
import classNames from 'classnames';
import './Pages.scss';
import AboutMe from '../components/AboutMe';
import TimelineEntry from '../components/TimelineEntry';
import projects from './projects.png';
import talks from './talks.png';

const IndexPage = () => (
  <div>
    <div className="verticalTimeline">
      <AboutMe />
      <TimelineEntry entryText='Projects' image={projects}/>
      <TimelineEntry entryText='Talks' image={talks}/>
    </div>
  </div>
);

export default IndexPage;
