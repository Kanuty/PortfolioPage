import React from 'react';
import PropTypes from 'prop-types';

import { cartContainer, pictureSection, textSection, hexagon, waves} from'./style.module.css';

function Cyberpunk03(props) {
  const {
    title,
    description,
    link,
    imagePath,
    imageAlt,
  } = props;
  
  return (
    <div className={cartContainer}>
      <div className={waves}>
        <div className={`${pictureSection} ${hexagon}`}>
          <img src={imagePath} alt={imageAlt}></img>
        </div>
        <div className={textSection}>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link}>{link}</a>
        </div>
      </div>
    </div>
  );
}

Cyberpunk03.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  imageAlt: PropTypes.string,
};

Cyberpunk03.defaultProps = {
  description: "",
  imagePath: "",
};

export default (Cyberpunk03);
