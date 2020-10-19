import React from 'react';

import GlitchedText from '../../components/glitchedText';
import ContactForm from '../../components/contactForm'
import {contactParagraph, formContainer, contactImg} from './style.module.css';

function Contact() {
  return (
    <div className="globalContainer">
      <GlitchedText text="Contact me"></GlitchedText>
      <p className={contactParagraph}>I am open for new challenges. Most interested in working with React framework. However, if you have other request or question
        front-end, 2d/3d graphic or related to my academical background (international affairs, battlegroups of UE, strategic studies), don't hesitate to contact me using form below.
      </p>
      <p className={contactParagraph}>You can also contact me by:
        <a className={contactImg} href='https://www.facebook.com/bartosz.dudek.9/' target="null">
          <img src={require("./img/fb001.svg")} alt='facebook'/>
        </a>
        <a className={contactImg} href='https://www.linkedin.com/in/bartosz-dudek-050362120/' target="null">
          <img src={require("./img/linkedin001.svg")} alt='linkedin'/>
        </a>
      </p>
      <div className={formContainer}>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
