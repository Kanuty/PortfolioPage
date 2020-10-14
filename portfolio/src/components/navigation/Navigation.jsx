import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faDiceD20, faGem, faHome, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { logo } from "./style.module.css"

const Navigation = (props) => {
  const {
    artStationLink,
    facebookLink,
    gitLink,
    linkedinLink,
  } = props;

  return (
    <header>
      <img src={require("./img/logo008.svg")} className={logo} alt='logo'/>
      <nav>
        <Link to='/'>
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
          <a href={artStationLink} target="_blank">
            <img src={require("./img/artStation001.svg")} alt='artStation'/>
          </a>
        </li>
        <li>
          <a href={facebookLink} target="_blank">
            <img src={require("./img/fb001.svg")} alt='facebook'/>
          </a>
        </li>
        <li>
          <a href={gitLink} target="_blank">
            <img src={require("./img/git001.svg")} alt='github'/>
          </a>
        </li>
        <li>
          <a href={linkedinLink} target="_blank">
            <img src={require("./img/linkedin001.svg")} alt='linkedin'/>
          </a>
        </li>
      </ul>
    </header>
  )
};

Navigation.propTypes = {
  artStationLink: PropTypes.string,
  facebookLink: PropTypes.string,
  gitLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

Navigation.defaultProps = {
  artStationLink: 'https://www.artstation.com/kanut/albums/1134764',
  facebookLink: 'https://www.facebook.com/bartosz.dudek.9/',
  gitLink: 'https://github.com/Kanuty',
  linkedinLink: 'https://www.linkedin.com/in/bartosz-dudek-050362120/',
};

export default (Navigation);