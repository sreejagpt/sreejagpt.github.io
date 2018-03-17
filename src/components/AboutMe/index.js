import React from 'react';
import styles from './AboutMe.module.scss';
import me from './assets/me.png';

const AboutMe = () => (
  <div className={styles.row}>
    <span>
      <img src={me} />
    </span>
    <div className={styles.column}>
      <h1>sreejagpt.</h1>
      <h2>Full stack developer.</h2>
      <div className={styles.inlineIcons}>
        <a
          href="http://www.linkedin.com/in/sreeja-gupta"
          className={styles.linkedin}
          target="_blank"
        />
        <a
          href="https://twitter.com/sreejagpt/"
          className={styles.twitter}
          target="_blank"
        />
        <a
          href="https://github.com/sreejagpt"
          className={styles.github}
          target="_blank"
        />
      </div>
    </div>
  </div>
);

export default AboutMe;