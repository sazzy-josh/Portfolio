import React from "react";
import IMG1 from "../../assets/images/P1.png";
import IMG3 from "../../assets/images/P2.png";
import IMG2 from "../../assets/images/P3.png";
import IMG5 from "../../assets/images/p6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Chicken City",
    github: "https://github.com/sazzy-josh/Full_Stack_React_Project",
    content:
      "A food delivery web application that enables you make orders at the convinience of your home",
    stack: ["React", "Tailwind", "Flutterwave SDK", "Framer motion"],
    demo: "https://chickencity.vercel.app",
  },
  {
    id: 2,
    image: IMG3,
    title: "Class54 Education ",
    stack: ["Vue", "Pinia", "SCSS"],
    content:
      "A personalized and portable examination preparation app which increases your chance of success (in JAMB UTME CBT & WAEC) by a very wide margin.",
    github: null,
    demo: "https://class54.com",
  },
  {
    id: 4,
    image: IMG5,
    title: "Bento Africa",
    stack: ["Nuxt.js", "Vuetify", "GSAP"],

    content:
      "Bento Africa - A leading Payroll and HRM tech firm helping companies across Africa reimagine payroll, hiring, and employee management.",
    github: null,
    demo: "https://www.bento.africa/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Drag and Drop Gallery",
    stack: ["Next.js", "Tailwind", "React Dnd kit"],

    content:
      "A simple web application that allows its users view images in its gallery, and also allows re-aranging its images by dragging and dropping",
    github: " https://github.com/sazzy-josh/HNG-STAGE-3",
    demo: "https://joshgallery-dnd.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({id, image, title, github, demo, content, stack}) => {
          return (
            <articule key={id} className='portfolio__item' data-aos='zoom-in'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p style={{fontSize: "12px", marginBottom: "5px"}}>{content}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  marginBottom: "10px",
                }}
              >
                {stack.map((item) => (
                  <span
                    style={{
                      color: "white",
                      fontSize: "10px",
                      border: "1px solid grey",
                      borderRadius: "10px",
                      padding: "3px 10px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  style={{
                    cursor: `${!github ? "not-allowed" : "pointer"}`,
                  }}
                >
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </articule>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
