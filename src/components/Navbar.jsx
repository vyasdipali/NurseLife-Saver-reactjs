import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap"; // Import NavDropdown from react-bootstrap
import CollegeStudent from "./Pages/CollegeStudent";
import Experience from "./Pages/Experience";
const Navbar = () => {
  return (
    <div>
      <div className="website">
        <div div className="Main">
          <nav className="navbar">
            <div className="logo"> NURSE JOB.COM </div>
            <div style={{ marginTop: "3px" }}>
              <div className="menu-burger-container">
                <div className="burger-line"></div>
                <div className="burger-line-2"></div>
                <div className="burger-line-3"></div>
              </div>
            </div>
            <div className="menu-link-button-container">
              <div className="menu">
                <ul className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About </Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                  <li>
                    <NavDropdown
                      title="Job Requirement"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item >
                        <Link to="/CollegeStudent">CollegeStudent</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <Link to="/Experience ">Experience </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
