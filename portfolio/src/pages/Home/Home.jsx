import React from 'react';

import GlitchedText from '../../components/glitchedText';
import {contactButton, description, homeContainer} from './style.module.css';

function Home() {
  return (
    <div className='globalContainer'>
      <GlitchedText text='Home'></GlitchedText>
      <div className={homeContainer}>
        
        <h3>Bartosz "Kanut" Dudek</h3>
        <h5>Front-end Developer</h5>
        <p className={description}>My current goal is to became capable and self-sufficent web developer.
          I want to create web pages and applications that will improve life on daily basis.
          Tools for RPG games? Of course! Social platforms for self development? Sure!
          
          But main main goal is to make proffesional tools for academic that will help
          research and show everything related to international studies.
          Ideas, people, teritory... sociology, military, economics, politics...
          World is changing  more rapid than JS frameworks. Without modern tools
          we will not be able to face future prepered. </p>
        <img src={require('./img/timeline.svg')} alt='Timeline'></img>
        <p className={description}>If you have a job proposition, or you  want to help me grow as a developer in another way than:</p>
        <button className={contactButton}>Contact me</button>
      </div>
    </div>
  );
}

export default Home;
