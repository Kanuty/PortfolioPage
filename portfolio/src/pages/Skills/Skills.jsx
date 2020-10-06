import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk00 from '../../components/conteners/cyberpunk00'

import './style.module.css';

function Skills() {
const skills  = [["HTML", 4], ["CSS", 3], ["JS", 3], ["REACT", 3], ["REDUX", 2]]
const skillsGraph  = [["INKSCAPE", 4], ["BLENDER", 3], ["SP", 2], ["SD", 2], ["KRITA", 4]]
const skillsOther  = [["GRAPHQL", 2], ["NODE.JS", 2], ["PHP", 1], ["PYTHON", 1], ["SASS", 2]]
  return (
    <div className="globalContainer">
      <GlitchedText text="Skills"></GlitchedText>
      <Cyberpunk00 skills={skills}></Cyberpunk00>
      <Cyberpunk00 skills={skillsGraph}></Cyberpunk00>
      <Cyberpunk00 skills={skillsOther}></Cyberpunk00>
    </div>
  );
}

export default Skills;
