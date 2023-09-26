import React from "react";
import CTA from "../CTA";
import ME from "../../assets/images/me1.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <p>Hello I'm</p>
        <h1 style={{lineHeight: "35px"}} className='text-red-500'>
          Idahosa Joshua
        </h1>
        <h5 className='text-light'>Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='' className='image' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
