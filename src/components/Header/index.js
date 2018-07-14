import React from 'react';
import styles from './Header.module.scss';
import me from './assets/me.png';

const Header = () => (
  <header className={styles.root}>
    <span>
      <img src={me} />
    </span>
    <div className={styles.column}>
      <h1>sreejagpt</h1>
      <h2>Full stack developer</h2>
    </div>
  </header>
);

export default Header;
