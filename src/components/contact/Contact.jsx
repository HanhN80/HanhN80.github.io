import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wtbm6ti",
      "template_i6qln8r",
      form.current,
      "0EeueMpXGVCbHe4I0"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pmphanhvp@gmail.com</h5>
            <a href="mailto:pmphanhvp@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Tuitoring</h5>
            <a href="https://m.me/ruby.huynhhanh" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Please send message below</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+18312244959"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="17"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn__primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
