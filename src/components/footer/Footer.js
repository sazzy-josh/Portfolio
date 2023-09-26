import React from "react";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";

import {IoLogoTwitter} from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/idahosa-joshua' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://twitter.com/sazzy_io' target='_blank'>
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Idahosa Joshua. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
