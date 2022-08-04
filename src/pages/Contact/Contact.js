import React from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>
        CONTACT <span>ME</span>
      </h1>
      <div className="contact-box-container">
        <div className="contact-box1">
          <div className="contact-box1-icon">
            <BsFillTelephoneFill />
          </div>
          <p>+905528819132</p>
        </div>
        <div className="contact-box2">
          <div className="contact-box2-icon">
            <AiTwotoneMail />
          </div>
          <p>farzinm4874@gmail.com</p>
        </div>
        <div className="contact-box3">
          <div className="contact-box3-icon">
            <a href=" https://www.linkedin.com/in/farzin-mohamadi" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/Farzinm4874" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          
            
          </div>
        </div>
      </div>
      <p>Hover to see details</p>
    </div>
  );
}

export default Contact;
