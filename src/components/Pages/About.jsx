import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0px auto" }}>
      <div className="about-us">
        <div>
          <h3>ABOUT US</h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="line-about"> </div>
      </div>
      <div className="text-tag-about">
        <div>
          <p className="text-one-p">
            Nurse Jobs is a leading firm dedicated to professional job seekers
            around the world. Our objective is to bridge the gap between
            Healthcare Professional <br /> and Healthcare Employers in every
            possible way. Only Nurse Jobs Partners with a vast network of Job
            seekers and Job Providers in the field of Healthcare. <br /> It has
            ensured the quality and trustworthiness of providing the qualified
            candidates to the right employer in India & globally.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="line-about-text"> </div>
      </div>

      <div className="text-tag-about">
        <div>
          <p className="question-div-text">What we do</p>
          <p className="text-one-p">
            Visibility. Credibility. Profitability <br /> We believe in doing
            what we want to do, do it well so that we can show and get it worked
            out. With an insightful understanding, bestowed with <br />
            freethinking and outstanding track record in the networking
            industry, the portal is well-equipped to source the graduates
            effectively.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="line-about-text"> </div>
    </div>
      <div className="text-tag-about">
        <div>
          <p className="question-div-text">Service to grow</p>
          <p className="text-one-p">
          For Job providers, Nurses Jobs is a one-stop shop solution for all their recruitment needs. With its wide range of solutions made available for  <br /> Hospitals and Healthcare Centers - download the database with resumes, job posting, search criteria with dynamic keywords.<br/> <br />
          Search engine that helps Nurses find the best jobs listed, updating profile and information with right skills, creating an outstanding resume, daily bulk <br/>emails with job alerts, jobs on-the-go for mobile users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
