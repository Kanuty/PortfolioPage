import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faDiceD20, faGem, faHome, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import "./style.module.css"

const Navigation = (props) => {
  const {
    linkedinLink,
    facebookLink
  } = props;

  return (
  <header>
    <img src={require("./img/logo008.svg")} alt='logo'/>
    <nav>
      <Link to='/'
       className='active'
      >
          <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to='/about'>
          <FontAwesomeIcon icon={faUserSecret} />
      </Link>
      <Link to='/skills'>
          <FontAwesomeIcon icon={faDiceD20} />
      </Link>
      <Link to='/gallery'>
          <FontAwesomeIcon icon={faGem} />
      </Link>
      <Link to='/contact'>
          <FontAwesomeIcon icon={faAddressCard} />
      </Link>
    </nav>
    <ul>
      <li>
        <a href={linkedinLink} target="_blank">
        <img src={require("./img/linkedin001.svg")} alt='linkedin'/>
        </a>
      </li>
      <li>
        <a href={facebookLink} target="_blank">
          <img src={require("./img/fb001.svg")} alt='facebook'/>
        </a>
      </li>
    </ul>
  </header>
  )
};

Navigation.propTypes = {
  linkedinLink: PropTypes.string,
  facebookLink: PropTypes.string,
};

Navigation.defaultProps = {
  linkedinLink: 'https://www.linkedin.com/in/bartosz-dudek-050362120/',
  facebookLink: 'https://www.facebook.com/bartosz.dudek.9/',
};

export default (Navigation);