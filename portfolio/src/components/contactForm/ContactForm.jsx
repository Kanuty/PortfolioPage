import React from 'react';
import emailjs from 'emailjs-com';

import { button, buttonIcon, buttonLabel, contactForm, input, inputElement, inputLabel } from'./style.module.css';

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
      {/* <label>Name</label>
      <input type="text" placeholder="" name="from_name" required />
      <label>Email</label>
      <input type="email" placeholder="" name="from_email" required/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" placeholder="" value="Send" required/> */}
      <div className={input}>
        <input id="name" type="text" className={inputElement} placeholder=" " name="form_name" required/>
        <label className={inputLabel} htmlFor="name">Your name</label>
      </div>
      <div className={input}>
        <input id="email" type="email" className={inputElement} placeholder=" " name="form_email" required/>
        <label className={inputLabel} htmlFor="email">Email</label>
      </div>
      <div className={input}>
        <textarea id="email" type="email" className={inputElement} placeholder=" " name="message" required/>
        <label className={inputLabel} htmlFor="email">Message</label>
      </div>
      <button type="button" className={button}>
        <div className={buttonLabel}>Send</div>
      </button>
    </form>
  )
};

export default (ContactForm);
