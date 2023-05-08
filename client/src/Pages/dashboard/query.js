import { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// To be removed

const initialState = {
  name: "",
  email: "",
};
const Query = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_55u9ony,template_1u5xrb9, form.current,UtuJZstWyBB22fTow)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return ( <Wrapper>
                    
<form className="form" ref={form} onSubmit={sendEmail}>

        <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="btn btn-block" />
         
      </form>
    </Wrapper>
    
    )
}

export default Query
