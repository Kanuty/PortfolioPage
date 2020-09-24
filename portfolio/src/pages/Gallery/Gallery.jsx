import React from 'react';

import GlitchedText from '../../components/glitchedText';
import Cyberpunk03 from '../../components/conteners/cyberpunk03'
import warhammer01 from './img/Warhammer01.png';
import warhammer02 from './img/Warhammer02.png';
import nasa from './img/nasa01.png';
import './style.module.css';

function Gallery() {
  return (
    <div className="globalContainer">
      <GlitchedText text="Old Projects"/>
      <Cyberpunk03
        title="Warhammer Loot Generator 2.0"
        description="wip"
        link="https://warhammergmtoolkit.netlify.app/"
        imagePath={warhammer02}
        imageAlt="Warhammer"
      />
      <Cyberpunk03
        title="Warhammer Loot Generator 1.0"
        description="wip"
        link="https://randomlootgenerator.netlify.app/"
        imagePath={warhammer01}
        imageAlt="Warhammer"
      />
      <Cyberpunk03
        title="SPACER"
        description="Nasa images searcher. App created with help of 'Hello Roman' tutorial"
        link="https://spacer-kanut.netlify.app/"
        imagePath={nasa}
        imageAlt="Space"
      />
    </div>
  );
}

export default Gallery;
