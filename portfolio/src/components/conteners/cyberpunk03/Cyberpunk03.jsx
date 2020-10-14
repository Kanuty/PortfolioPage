import React from 'react';
import PropTypes from 'prop-types';

import { cartContainer, pictureSection, textSection } from'./style.module.css';

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
      <div className={pictureSection}>
        <img src={imagePath} alt={imageAlt}></img>
      </div>
      <div className={textSection}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a target="_blank" href={link}>{link}</a>
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
