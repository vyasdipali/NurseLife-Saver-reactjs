import React, { useState } from "react";
import "./CollegeStudent.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PersonCircle,
  Envelope,
  Telephone,
  ChatDots,
  Calendar,
  GeoAlt,
  Building,
  BuildingFill,
  ChatLeftDotsFill,
  CalendarEventFill,
  CurrencyRupee,
  PersonWorkspace,
  ImageFill,
} from "react-bootstrap-icons";
import DropzoneArea from "./DropzoneArea";

const fieldsCollege = [
  {
    icon: <PersonCircle size={23} />,
    key: "text",
    placeholder: "Enter name",
  },

  { icon: <Envelope size={23} />, key: "email", placeholder: "Enter email" },
  {
    icon: <Telephone size={23} />,
    key: "phone",
    placeholder: "Enter phone number",
  },
  {
    icon: <ChatDots size={23} />,
    key: "apply",
    placeholder: "How can apply to this job ",
  },
  {
    icon: <Calendar size={23} />,
    key: "date",
    placeholder: "Enter Date of Birth",
  },
  { icon: <GeoAlt size={23} />, key: "city", placeholder: "Enter city" },
  {
    icon: <BuildingFill size={23} />,
    key: "Company",
    placeholder: "Enter Company Name",
  },
  {
    icon: <Building size={23} />,
    key: "college",
    placeholder: "Enter college name",
  },
  {
    icon: <CalendarEventFill size={23} />,
    key: "passing",
    placeholder: "Enter your passing year",
  },
  {
    icon: <PersonWorkspace size={23} />,
    key: "role",
    placeholder: "Enter role",
  },
  
];

const CollegeStudent = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const addToLocalStorage = (item) => {
    if (typeof Storage !== "undefined") {
      const existingItems =
        JSON.parse(localStorage.getItem("studentFormData")) || [];
      existingItems.push(item);
      localStorage.setItem("studentFormData", JSON.stringify(existingItems));
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLocalStorage(formData);
    setFormData({
      text: "",
      email: "",
      phone: "",
      apply: "",
      date: "",
      city: "",
      Company: "",
      college: "",
      passing: "",
      role: "",
    });
    alert("Details saved successfully!");
  };

  return (
    <div style={{ maxWidth: "1440px", margin: "0px auto" }}>
      <div className="college-student-div">
        <p className="health">
          College Student <span className="click"> Enrollment</span> job apply
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="from-div-std ">
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginTop: "30px",
              }}
            >
              {fieldsCollege.map((item) => (
                <div key={item.key}>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "23px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginRight: "18px" }}>{item.icon}</div>
                    <input
                    
                      type={fieldsCollege.key === "email" ? "email" : "text"} // Adjust the type if needed
                      placeholder={item.placeholder}
                      className="form-control-div"
                      aria-label={item.label}
                      aria-describedby={`basic-addon${item.key}`}
                      value={formData[item.key]}
                      onChange={(e) => handleChange(e, item.key)}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "23px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "23px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginRight: "18px" }}>
                      <ImageFill size={26} />
                    </div>
                    <DropzoneArea />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" , marginBottom:"54px" }}>
              <button className="submit-btn-contact">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default CollegeStudent;
