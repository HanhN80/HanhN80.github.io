import React from "react";
import Resume from "../../image/Resume_Hanh_Nguyen.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Question? Say Hi
      </a>
    </div>
  );
};

export default CTA;
