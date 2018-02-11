import React from 'react';
import styles from './Pages.module.scss';
import AboutMe from '../components/AboutMe';
import TimelineEntry from '../components/TimelineEntry';
import projects from './projects.png';
import talks from './talks.png';
import metamorph from './metamorph.png';

const IndexPage = () => (
  <div>
    <div className={styles.verticalTimeline}>
      <AboutMe />
      <TimelineEntry
        entryText="Projects"
        image={projects}
        details={projectDetails}
      />
      <TimelineEntry entryText="Talks" image={talks} />
    </div>
  </div>
);

const projectDetails = [
  {
    heading: 'Metamorf',
    subtitle:
      'A machine learning smart bridge to help producers find original Australian content to adapt for the screen',
    awards: 'Winner, Arts/Screen Hack 2017',
    image: metamorph,
  },
];

export default IndexPage;
