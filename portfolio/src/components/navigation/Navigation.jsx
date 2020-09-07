import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "./style.module.css"

const Navigation = (props) => {
  const {
    logo,
    linkedinLink,
    facebookLink
  } = props;

  return (
  <header>
    <img src={logo} alt='logo'></img>


    <ul>
      <li>
        <a href={linkedinLink} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />

        </a>
      </li>
      <li>
        <a href={facebookLink} target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        
      </li>
    </ul>
  </header>
  )
};

Navigation.propTypes = {
  logo: PropTypes.string,
  linkedinLink: PropTypes.string,
  facebookLink: PropTypes.string,
};

Navigation.defaultProps = {
  linkedinLink: 'https://www.linkedin.com/in/bartosz-dudek-050362120/',
  facebookLink: 'https://www.facebook.com/bartosz.dudek.9/',
};

export default (Navigation);