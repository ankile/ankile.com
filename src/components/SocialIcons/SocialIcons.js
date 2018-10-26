import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankile" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/larsankile" style={ { color: colorPrimary } }><i className="fab fa-facebook"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lars-ankile-374554125/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="" rel="noopener noreferrer" href="mailto:lars.ankile@gmail.com" style={ { color: colorPrimary } }><i className="fas fa-envelope"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="tel:+4794897416" style={ { color: colorPrimary } }><i className="fas fa-mobile"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
