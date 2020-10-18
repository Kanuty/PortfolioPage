import React from 'react';

import GlitchedText from '../../components/glitchedText';
import { Link } from 'react-router-dom'

import {contactButton, description, homeContainer, note} from './style.module.css';

function Home() {
  return (
    <div className='globalContainer'>
      <GlitchedText text='Home'></GlitchedText>
      <div className={homeContainer}>
        <h3>Bartosz "Kanut" Dudek</h3>
        <h5>Front-end Developer (React)</h5>
        <p className={description}>My current goal is to become capable and self-sufficient web developer.
          I want to create web pages and applications that will improve life on daily basis.
          Tools for RPG games? Of course! Social platforms for self development? Sure!
          
          But main main goal is to make professional tools for academic that will help
          research and show everything related to international studies.
          Ideas, people, territory... sociology, military, economics, politics...
          World is changing more rapidly than JS frameworks. Without modern tools
          we will not be able to face future prepared. </p>
        <img src={require('./img/timeline.svg')} alt='Timeline'></img>
        <p className={`${description} ${note}`}>*KSSM  UJ = International Relations Student’s Association at Jagiellonian University </p>
        <p className={description}>If you have a job offer or you  want to help me grow as a developer in another way than:</p>
        <Link className={contactButton}to='/contact'> Contact me </Link>
      </div>
    </div>
  );
}

export default Home;
