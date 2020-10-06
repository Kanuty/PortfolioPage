import React from 'react';

import GlitchedText from '../../components/glitchedText';
import ContactForm from '../../components/contactForm'
import './style.module.css';

function Contact() {
  return (
    <div className="globalContainer">
      <GlitchedText text="Contact"></GlitchedText>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;
