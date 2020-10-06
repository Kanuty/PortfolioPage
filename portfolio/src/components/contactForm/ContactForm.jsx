import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

import { contactForm } from'./style.module.css';

function ContactForm() {

  function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('CyberKanut55', 'template_4m03hq3', e.target, 'user_yLD1UJxwwI10YxMceFHVC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <form
      className={contactForm}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input type="text" placeholder="" name="from_name" required />
      <label>Email</label>
      <input type="email" placeholder="" name="from_email" required/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" placeholder="" value="Send" required/>
    </form>
  )
};


ContactForm.propTypes = {
  
};

ContactForm.defaultProps = {

};

export default (ContactForm);
