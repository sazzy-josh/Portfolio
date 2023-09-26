import React from "react";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Programmimg Language</h3>
          <div className='experience__content'>
            <articule className='experience__details' data-aos='fade-right'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-right'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Elixir</h4>
              </div>
            </articule>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Frame work</h3>
          <div className='experience__content'>
            <articule className='experience__details' data-aos='fade-right'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {" "}
                <h4>Next.js</h4>
              </div>
            </articule>

            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-right'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {" "}
                <h4>Nuxt</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {" "}
                <h4> Tailwind</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {" "}
                <h4>Vuetify</h4>
              </div>
            </articule>
            <articule className='experience__details' data-aos='fade-left'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                {" "}
                <h4>SCSS</h4>
              </div>
            </articule>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
