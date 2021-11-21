import React from 'react';
import PropTypes from 'prop-types';

import html from './img/html002.svg';
import netins from './img/netins001.svg';
import hicron from './img/hicron001.svg';
import play from './img/play001.svg';
import superdrob from './img/superdrob001.svg';
import sap from './img/sap001.svg';


import { container, mainContent, skillEmblem, skillText, } from'./style.module.css';

function CompaniesList(props) {
  const {
    text,
  } = props;

  const image = 
    text === "HTML" ? html :
    text ==="Netins" ? netins :
    text ==="Hicron" ? hicron :
    text ==="Play" ? play :
    text ==="SuperDrob" ? superdrob :
    text ==="SAP" ? sap :
    html;
  
  return (
    <div className={container}>
      <ul>
        <li className={mainContent}>
          <div className={skillEmblem}>
            { <img src={image} alt={text}></img> }
          </div>
          <div className={skillText}>
            <span>{text}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

CompaniesList.propTypes = {
  text: PropTypes.string,
};

CompaniesList.defaultProps = {
  text: `Lorem ipsum`,
};

export default (CompaniesList);
