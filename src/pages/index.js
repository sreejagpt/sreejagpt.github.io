import React from 'react';
import styles from './Pages.module.scss';
import Navigation from '../components/Navigation';
import AboutMe from '../components/AboutMe';

const IndexPage = () => (
  <div>
    <Navigation navItems={[{text: 'About Me'}, {text: 'Michael is awesome'}]}/>
    <div className={styles.verticalTimeline}>
      <AboutMe />
    </div>
  </div>
);

export default IndexPage;
