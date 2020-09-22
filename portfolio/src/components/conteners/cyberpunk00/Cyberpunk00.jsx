import React from 'react';
import PropTypes from 'prop-types';

import Cyberpunk02 from '../cyberpunk02'

import { cyberLongSquere } from'./style.module.css';

function Cyberpunk00(props) {
  const {
    container,
    skills,
  } = props;
  
  return (
    <div className={container}>
      {skills.map(element => 
        <Cyberpunk02 text={element}></Cyberpunk02>
      )}
    </div>
  );
}

Cyberpunk00.propTypes = {
  container: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};

Cyberpunk00.defaultProps = {
  container: cyberLongSquere,
  skills: ["1","2","3","4","5"],
};

export default (Cyberpunk00);
