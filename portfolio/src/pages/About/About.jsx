import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk01 from '../../components/conteners/cyberpunk01'
import './style.module.css';

function About() {
  return (
    <div className="globalContainer">
      <GlitchedText text="About"></GlitchedText>
      <h3>Under construction</h3>
      <Cyberpunk01 ></Cyberpunk01>
      <p>Things to do:
        Links to Artstation and Gitlab
        What I do right now
        My non-programming expertes

      </p>
    </div>
  );
}

export default About;
