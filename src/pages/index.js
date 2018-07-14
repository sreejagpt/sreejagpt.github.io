import React from 'react';
import styles from './Pages.module.scss';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const IndexPage = ({ location }) => {
  return (
    <div>
      <Header/>
      <Navigation
        currentPathname={location.pathname || '/'}
        navItems={[
          { text: 'About Me', url: '/' },
          { text: 'Talks', url: '/talks' },
          { text: 'Michael is awesome', url: '404' },
        ]}
      />
    </div>
  );
};

export default IndexPage;
