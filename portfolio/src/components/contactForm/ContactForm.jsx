import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { contactForm, input, inputElement, inputLabel, inputButton } from'./style.module.css';

function ContactForm() {

  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('CyberKanut55', 'template_4m03hq3', e.target, 'user_yLD1UJxwwI10YxMceFHVC')
    .then((result) => {
        console.log(result.text);
        setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false)
          }, 3000);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <React.Fragment>
      <form
        className={contactForm}
        onSubmit={sendEmail}
        autoComplete="off"
      >
        {emailSent?  <span>Email Sent!</span> : <span></span>}
        <span>Fields with * are required</span>
        <div className={input}>
          <input id="name" type="text" className={inputElement} placeholder=" " name="from_name" required/>
          <label className={inputLabel} htmlFor="name">Your name*</label>
        </div>
        <div className={input}>
          <input id="surname" type="text" className={inputElement} placeholder=" " name="from_surname" />
          <label className={inputLabel} htmlFor="name">Your surname</label>
        </div>
        <div className={input}>
          <input id="email" type="email" className={inputElement} placeholder=" " name="from_email" required/>
          <label className={inputLabel} htmlFor="email">Email*</label>
        </div>
        <div className={input}>
          <input id="phone" type="tel" className={inputElement} placeholder=" " name="from_phone" />
          <label className={inputLabel} htmlFor="email">Telephone number</label>
        </div>
        <div className={input}>
          <input id="subject" type="subject" className={inputElement} placeholder=" " name="subject" required/>
          <label className={inputLabel} htmlFor="subject">Subject*</label>
        </div>
        <div className={input}>
          <textarea id="message" className={inputElement} placeholder=" " name="message" required/>
          <label className={inputLabel} htmlFor="message">Message*</label>
        </div>
        <input type="submit" className={inputButton} placeholder="" value="Send" required/>
      </form>
    </React.Fragment>
  )
};

export default (ContactForm);
