import React from 'react';
import PropTypes from 'prop-types';

import blender from './img/blender002.svg';
import css from './img/css002.svg';
import graphql from './img/graphql002.svg';
import html from './img/html002.svg';
import inkscape from './img/inkscape002.svg';
import java from './img/java002.svg';
import js from './img/js002.svg';
import krita from './img/krita002.svg';
import node from './img/node002.svg';
import react from './img/react002.svg';
import redux from './img/redux002.svg';
import sd from './img/sd002.svg';
import sass from './img/sass002.svg';
import sp from './img/sp002.svg';
import sql from './img/sql002.svg';

import { container, mainContent, skillEmblem, skillText, checked} from'./style.module.css';

function Cyberpunk02(props) {
  const {
    text,
    raiting,
  } = props;


  const image = text === "HTML" ? html :
    text ==="CSS" ? css :
    text ==="JS" ? js :
    text ==="REACT" ? react :
    text ==="REDUX" ? redux :
    text ==="INKSCAPE" ? inkscape :
    text ==="BLENDER" ? blender :
    text ==="SP" ? sp :
    text ==="SD" ? sd :
    text ==="KRITA" ? krita :
    text ==="GRAPHQL" ? graphql :
    text ==="NODE.JS" ? node :
    text ==="JAVA" ? java :
    text ==="SQL" ? sql :
    text ==="SASS" ? sass :
    html;
  
  return (
    <div className={container}>
      <ul>
        <li className={mainContent}>
          <div className={skillEmblem}>
            <img src={image} alt={text}></img>
          </div>
          <div className={skillText}>
            <span>{text}</span>
          </div>
          <span className= {raiting < 1 ? "fa fa-spinner fa-pulse" : `fa fa-star ${checked}`}></span>
          <span className= {raiting < 2 ? "fa fa-spinner fa-pulse" : `fa fa-star ${checked}`}></span>
          <span className= {raiting < 3 ? "fa fa-spinner fa-pulse" : `fa fa-star ${checked}`}></span>
          <span className= {raiting < 4 ? "fa fa-spinner fa-pulse" : `fa fa-star ${checked}`}></span>
          <span className= {raiting < 5 ? "fa fa-spinner fa-pulse" : `fa fa-star ${checked}`}></span>
        </li>
      </ul>
    </div>
  );
}

Cyberpunk02.propTypes = {
  text: PropTypes.string,
  raiting: PropTypes.number,
};

Cyberpunk02.defaultProps = {
  text: `Lorem ipsum`,
  raiting: 1,
};

export default (Cyberpunk02);
