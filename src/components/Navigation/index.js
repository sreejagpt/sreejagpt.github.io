import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const Navigation = ({ navItems, currentPathname }) => {
  const navElements = navItems.map((navItem, index) => (
    <a
      key={index}
      className={classNames.bind(styles)({
        active: navItem.url === currentPathname,
      })}
      href={navItem.url}
    >
      {navItem.text}
    </a>
  ));

  return <div className={styles.root}>{navElements}</div>;
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default Navigation;
