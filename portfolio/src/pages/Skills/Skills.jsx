import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk00 from '../../components/conteners/cyberpunk00'

import './Skills.css';

function Skills() {
const skills  = ["HTML", "CSS", "JS", "REACT", "REDUX"]

  return (
    <div className="globalContainer">
      <GlitchedText text="Skills Page"></GlitchedText>
      <Cyberpunk00 skills={skills}></Cyberpunk00>
      <Cyberpunk00 skills={skills}></Cyberpunk00>
      <Cyberpunk00 skills={skills}></Cyberpunk00>
    </div>
  );
}

export default Skills;
