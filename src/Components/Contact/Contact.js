// when someone submit the form the detail should be come on 
// for that use library emailjs
// npm i emailjs


import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Contex";
import { useContext } from "react";
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const[done, setDone] = useState(false)
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6reuwb', 'template_1zcrr6g', form.current, 'awL1wLvGhh_nShGHY')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="contact-form" id='Contact'>
            <div className="c-left">
                <div className="awesome">
                    <span style={darkMode ? {
                        color : 'white'
                    }: {color: ''}}
                    >Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                    style={{background: "#ABF1FF94"}}>   
                </div>
                </div>   
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
        <input type="text" name = "user_name" className="user" placeholder="Name" required/>
        <input type="email" name = "user_email" className="user" placeholder="Email" required/>
                    <textarea name="message" className="user" placeholder="Message" required/>
                    <input type="submit" value="send" className="button" />
                    <span>{ done && "Thanks for contacting me!"}</span>
                    <div
                        className="blur c-blur1"
                    style={{background: "var(--purple)"}}>
                        
            </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;