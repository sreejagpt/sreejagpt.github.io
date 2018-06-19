import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from '../../App.scss';

const TemplateWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    <Helmet
      title="sreejagpt"
      meta={[{ name: 'description', content: 'sreejagpt' }]}
    />
    <div className={styles.content}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
