import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk03 from '../../components/conteners/cyberpunk03'
import warhammer01 from './img/Warhammer01.png';
import warhammer02 from './img/Warhammer02.png';
import nasa from './img/Nasa01.png';
import './style.module.css';

function Gallery() {
  return (
    <div className="globalContainer">
      <GlitchedText text="Projects"/>
      <Cyberpunk03
        title="Warhammer Loot Generator 2.0"
        description="Second iteration of my loot generator. (Alpha version). To generate loot, you have to at first unlock at  least 1 item by clicking collerated icon."
        link="https://warhammergmtoolkit.netlify.app/"
        imagePath={warhammer02}
        imageAlt="Warhammer"
      />
      <Cyberpunk03
        title="Warhammer Loot Generator 1.0"
        description="My first program in JS. Made for a RPG campaign."
        link="https://randomlootgenerator.netlify.app/"
        imagePath={warhammer01}
        imageAlt="Warhammer"
      />
      <Cyberpunk03
        title="SPACER"
        description="Nasa images searcher. App created with help of 'Hello Roman' tutorial."
        link="https://spacer-kanut.netlify.app/"
        imagePath={nasa}
        imageAlt="Space"
      />
    </div>
  );
}

export default Gallery;
