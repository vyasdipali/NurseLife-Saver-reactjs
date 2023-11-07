import React from "react";
import "./Home.scss";
import {
  HospitalFill,
  CurrencyRupee,
  StarFill,
  ChatLeftDotsFill,
} from "react-bootstrap-icons";
const Home = () => {
  const blogPosts = [
    {
      title: "STAFF NURSE",
      hospitalIcons: [
        <HospitalFill size={20} />,
        <CurrencyRupee />,
        <StarFill />,
        <ChatLeftDotsFill />,
      ],
      hospitalName: "Varad Multispeciality Hospital",
      salaryRange: "14000 - 25000",
      experience: "3 - 12 Years Experience",
      timestamp: "20 June 2023 03:57:12 PM",
    },

    {
      title: "STAFF NURSE",
      hospitalIcons: [
        <HospitalFill size={20} />,
        <CurrencyRupee />,
        <StarFill />,
        <ChatLeftDotsFill />,
      ],
      hospitalName: "Varad Multispeciality Hospital",
      salaryRange: "14000 - 25000",
      experience: "3 - 12 Years Experience",
      timestamp: "20 June 2023 03:57:12 PM",
    },
    {
      title: "STAFF NURSE",
      hospitalIcons: [
        <HospitalFill size={20} />,
        <CurrencyRupee />,
        <StarFill />,
        <ChatLeftDotsFill />,
      ],
      hospitalName: "Varad Multispeciality Hospital",
      salaryRange: "14000 - 25000",
      experience: "3 - 12 Years Experience",
      timestamp: "20 June 2023 03:57:12 PM",
    },

    // Add more blog post objects as needed
  ];

  return (
    <div style={{ maxWidth: "1440px", margin: "0px auto" }}>
      <div className="main-01">
        <div className="text">
          <p className="health">
            WANT A JOB ? <br />
            is just a <span className="click"> Click</span> away.
          </p>
          <p className="p1">
          Many companies kick off their job descriptions with a standard boilerplate to introduce the company.  <br /> But that’s why you have a careers....
           
          </p>
          <button className="button3">Grt started</button>
        </div>

        <div className="picset">
          <figure className="fig">
            <img
              src="https://i.postimg.cc/Zqy5n2qf/623098964-huge-removebg-preview-1-1.png"
              className="fig-01"
              alt="resource.Name"
            />
          </figure>
        </div>
      </div>

      <div className="why">
        <p className="whyus">
          WANT<span className="us"> TO HIRE ?</span>
        </p>
        <p className="why1">
        I am passionate about my work. Every employer seeks to hire people who enjoy their work, <br />but the word “passion” evokes feelings of dedication 
          
        </p>
      </div>

      {blogPosts.map((post, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "40px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="blog-div" key={index}>
            <div className="blog-title">{post.title}</div>
            <div style={{ display: "flex", gap: "3pc", textAlign: "left" }}>
              <div>
                {post.hospitalIcons.map((icon, i) => (
                  <div key={i} style={{ marginTop: "12px" }}>
                    {icon}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ marginTop: "12px" }}>{post.hospitalName}</div>
                <div style={{ marginTop: "12px" }}>{post.salaryRange}</div>
                <div style={{ marginTop: "12px" }}>{post.experience}</div>
                <div style={{ marginTop: "12px" }}>{post.timestamp}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="details-div">
              <button className="apply-btn">details</button>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
