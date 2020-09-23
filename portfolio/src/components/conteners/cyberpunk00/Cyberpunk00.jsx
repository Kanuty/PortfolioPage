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
      {skills.map((element, index) => 
        <Cyberpunk02 key={index} text={element[0]} raiting={element[1]}></Cyberpunk02>
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
  skills: [["Aaa",1],["Bbb",2],["Ccc",3],["Ddd",4],["Eee",5]],
};

export default (Cyberpunk00);
