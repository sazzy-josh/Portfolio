import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option' data-aos='zoom-in'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>idahosajoshua61@gmail.com</h5>
            <a href='mailto:idahosajoshua61@gmail.com' target='_blank'>
              Send a Message
            </a>
          </article>

          <article className='contact__option' data-aos='zoom-in'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>Send a Message</h5>
            <a href='https://wa.me/+2347065015210' target='_blank'>
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            id=''
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
