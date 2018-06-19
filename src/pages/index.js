import React from 'react';
import styles from './Pages.module.scss';
import AboutMe from '../components/AboutMe';
import TimelineEntry from '../components/TimelineEntry';
import projects from './assets/projects.png';
import talks from './assets/talks.png';
import metamorph from './assets/metamorph.png';
import happybutton from './assets/happybutton.png';

const IndexPage = () => (
  <div>
    <div className={styles.verticalTimeline}>
      <AboutMe />
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
    url: 'https://github.com/sreejagpt/artscreenhack',
  },
  {
    heading: 'The Happy Button',
    subtitle:
      'An app with a button to view only good news using the ABC News API and sentiment analysis',
    awards: 'User Favourite, ABS Data Hackathon 2016',
    image: happybutton,
    url: 'https://github.com/sreejagpt/ABCGoodNews',
  },
];

export default IndexPage;
