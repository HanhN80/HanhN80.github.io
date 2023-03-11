import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/hanh-nguyen-76094162/"
        target="_blank"
      >
        <BsLinkedin className="icon" />
      </a>
      <a href="https://github.com/HanhN80" target="_blank">
        <BsGithub className="icon" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
