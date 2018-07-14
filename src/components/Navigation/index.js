import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = ({ navItems }) => {
   const navElements = navItems.map((navItem, index) => <a key={index} href={navItem.url}>{navItem.text}</a>);

   return (

    <div className={styles.root}>
      { navElements }
    </div>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default Navigation;

