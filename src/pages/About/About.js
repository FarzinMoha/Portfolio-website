import React from "react";
import "./About.css";
import personal from "../../img/personal.jpg";

function About() {
  return (
    <div id="about" className="about">
      <h1>
        ABOUT <span>ME</span>
      </h1>
      <div className="about-container">
        <div className="about-container-main">
          <div className="about-container-image">
            <img className="personal-img" src={personal} alt="vanilia" />
          </div>
          <div className="about-container-info">
            <h1>Vanilia Gomez</h1>
            <h2>FRONT-END DEVELOPER</h2>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <a className="about-container-info-btn" href='../../cv/Farzin Mohamadi CV.pdf' download>Dowanload CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
