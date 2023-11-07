import React, { useState } from "react";
import "./Contact.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PersonCircle,
  EnvelopeFill,
  TelephoneFill,
  GeoAlt,
  ChatLeftDotsFill,
} from "react-bootstrap-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const inputFields = [
    { label: "Enter Name", icon: <PersonCircle size={23} />, key: "name" },
    { label: "Email.com@xyz", icon: <EnvelopeFill size={23} />, key: "email" },
    { label: "Phone", icon: <TelephoneFill size={23} />, key: "phone" },
    { label: "Enter city", icon: <GeoAlt size={23} />, key: "city" },
  ];

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validateMobileNumber = (number) => {
    const regex = /^\d{10}$/; // Assuming 10-digit numbers, adjust as needed
    return regex.test(number);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Check if data already exists
    const existingData =
      JSON.parse(localStorage.getItem("contactFormData")) || [];

    const isEmailExists = existingData.some(
      (item) => item.email === formData.email
    );
    const isPhoneExists = existingData.some(
      (item) => item.phone === formData.phone
    );

    if (isEmailExists) {
      alert("Data already exists for this email");
      return;
    }

    if (isPhoneExists) {
      alert("Data already exists for this phone number");
      return;
    }

    // Save data to local storage
    addToLocalStorage(formData);

    // Clear input fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });

    // Display success message
    alert("Details saved successfully!");
  };
  const addToLocalStorage = (item) => {
    if (typeof Storage !== "undefined") {
      const existingItems =
        JSON.parse(localStorage.getItem("contactFormData")) || [];
      existingItems.push(item);
      localStorage.setItem("contactFormData", JSON.stringify(existingItems));
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  };
  return (
    <div className="contact-main">
      <div className="contact-dis">
        <div>
          <div>
            <h2>Contact</h2>
          </div>
          <div className="contact-email">
            <div className="email-class">
              Email : <a href="mailto:care@nursejob.in">myjob@nursejob.in</a>
            </div>
            <div className=" Contact-cls">
              Contact No. <a href="tel:999999999">999999999</a>
            </div>
          </div>
        </div>

        <div>
          <h2>Message Us</h2>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginTop: "30px",
              }}
            >
              {inputFields.map((item) => (
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
                      type="text"
                      placeholder={item.label}
                      className="form-control-div"
                      aria-label={item.label}
                      aria-describedby={`basic-addon${item.key}`}
                      required
                      value={formData[item.key]}
                      onChange={(e) => handleChange(e, item.key)}
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
                <div style={{ marginRight: "18px" }}>
                  <ChatLeftDotsFill size={26} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  cols="78"
                  placeholder="Enter the Message"
                  value={formData.message}
                  onChange={(e) => handleChange(e, "message")}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="submit-btn-contact">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
