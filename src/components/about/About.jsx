import React from "react";
import "./about.css";
import Me from "../../image/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Project</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p className="experience">
            <div>Hello everyone,</div>
            <div>Welcome to my portfolio website.</div>
            <div>
              I am Hanh Nguyen. I got a B.S degree in Computer Science from San
              Jose State University in San Jose, CA, in December 2022. I am
              deeply passionate about creative work and believe creativity is
              fundamental to our daily lives. Creativity is essential in solving
              complex problems and designing innovative solutions in computer
              science. The ability to think creatively and solve problems is
              highly valued in computer science, which is why coding draws me.
              As a coder, I find that my ability to think creatively and solve
              problems is highly valued, and I take great satisfaction in seeing
              the results of my problem-solving skills through the code I write.
            </div>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
