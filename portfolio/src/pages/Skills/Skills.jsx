import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk00 from '../../components/conteners/cyberpunk00'

import './style.module.css';

function Skills() {
const skillsBest  = [["HTML", 4], ["KRITA", 4], ["INKSCAPE", 4], ["CSS", 3], ["JS", 3]]
const skillsMedicore  = [["REACT", 3], ["BLENDER", 3], ["SP", 2], ["SD", 2], ["GRAPHQL", 2]]
const skillsNeglected  = [["REDUX", 2], ["SASS", 2], ["NODE.JS", 2], ["PHP", 1], ["PYTHON", 1]]
  return (
    <div className="globalContainer">
      <GlitchedText text="Skills"></GlitchedText>
      <Cyberpunk00 skills={skillsBest}></Cyberpunk00>
      <Cyberpunk00 skills={skillsMedicore}></Cyberpunk00>
      <Cyberpunk00 skills={skillsNeglected}></Cyberpunk00>
    </div>
  );
}

export default Skills;
