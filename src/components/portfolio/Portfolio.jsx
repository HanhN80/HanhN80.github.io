import React from "react";
import "./portfolio.css";
import IMG1 from "../../image/Keyboard.png";
import IMG2 from "../../image/Fettuccine.jpg";
import IMG3 from "../../image/Payroll.jpg";
import IMG4 from "../../image/calculator.jpg";
import IMG5 from "../../image/QR Code menu.png";
import IMG6 from "../../image/Heart Disease.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio",
    github: "https://github.com/HanhN80/HanhN80.github.io/tree/master",
    demo: "https://hanhn80.github.io/",
  },
  {
    id: 1,
    image: IMG2,
    title: "Server-side-Web-Programming",
    github: "https://github.com/HanhN80/Server-side-Web-Programming.git",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG3,
    title: "Payroll Project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG4,
    title: "Basic Calculator",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG5,
    title: "Restaurant QR Code Menu",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG6,
    title: "Predicting Heart Disease Using Machine Learning",
    github:
      "https://github.com/HanhN80/Machine-Learning/tree/main/Predicting%20Heart%20Disease",
    demo: "https://www.loom.com/share/7811c6e426d04242aee256ed25246667",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

