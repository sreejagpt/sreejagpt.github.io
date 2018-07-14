import React from 'react';
import styles from './Pages.module.scss';
import Navigation from '../components/Navigation';
import AboutMe from '../components/AboutMe';

const IndexPage = ({ location }) => {
  return (
    <div>
      <Navigation
        currentPathname={location.pathname || '/'}
        navItems={[
          { text: 'About Me', url: '/' },
          { text: 'Michael is awesome', url: '404' },
        ]}
      />
      <div className={styles.verticalTimeline}>
        <AboutMe />
      </div>
    </div>
  );
};

export default IndexPage;
