import React from "react";
import "./about.css";
import Me from "../../image/me.jpg";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get acquainted</h5>
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
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>Computer Science</small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Project</h5>
              <small>
                <a href="#portfolio"> 5+ Completed </a>
              </small>
            </article>
          </div>

          <p className="experience">
            {/* <div>Hello everyone,</div>
            <div>Welcome to my portfolio website.</div> */}
            <div>
              After completing my Computer Science degree, I dedicated several
              months to learning front-end and back-end web development to
              establish a strong foundation for pursuing full-stack development
              positions. My interest in databases grew as I recognized their
              pivotal role in completing the back end of a project. As time
              passed, I became more fascinated with coding than ever, prompting
              me to create a portfolio and embark on various mini-projects.
            </div>
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
