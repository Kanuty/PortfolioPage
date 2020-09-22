import React from 'react';
import PropTypes from 'prop-types';
import html from './img/html002.svg';
import css from './img/css002.svg';
import js from './img/js002.svg';
import react from './img/html001.svg';
import redux from './img/html001.svg';

import { container, upperTrivia, mainContent, skillEmblem, skillText} from'./style.module.css';

function Cyberpunk02(props) {
  const {
    text,
  } = props;


  const image = text === "HTML" ? html :
    text ==="CSS" ? css :
    text ==="JS" ? js :
    text ==="REACT" ? react :
    text ==="REDUX" ? redux :
    html;
  
  return (
    <div className={container}>
      <ul>
        <li className={upperTrivia}>
        </li>
        <li className={mainContent}>
          <div className={skillEmblem}>
            <img src={image} alt={text}></img>
          </div>
          <div className={skillText}>
            <span>{text}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

Cyberpunk02.propTypes = {
  text: PropTypes.string,

};

Cyberpunk02.defaultProps = {
  text: `Lorem ipsum`,
};

export default (Cyberpunk02);
