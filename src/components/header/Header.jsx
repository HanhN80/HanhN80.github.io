import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../image/me.jpg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header_container"></div>
      <h3>Hello</h3>
      <h2>My Name is Hanh Nguyen</h2>
      <h5 className="text">
        <p className="welcome">
          I'm Full-Stack Developer. My objective is to leverage my expertise to
          make meaningful contributions toward the company's success, gain more
          experience, increase my earnings, and ultimately improve the quality
          of my life.
        </p>
      </h5>
      <CTA />
      <div className="me">
        <img src={Me} alt="me" />
      </div>
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
      <HeaderSocials />
    </header>
  );
};

export default header;
