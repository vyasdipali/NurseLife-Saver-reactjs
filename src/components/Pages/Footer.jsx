import React from "react";
import "./Footer.scss";
import { Facebook, Twitter, Instagram, Linkedin, } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0px auto" }}>
      <div className="footer-div">
        <div class="last-how">
          <p class="how-1-0">NURSE JOB.COM</p>
        </div>

        <div>
          <div class="main-last-01">
            <div>
              <p class="con-us">CONTACT US</p>
              <p class="toll">Toll Free Number</p>
              <p class="num">+91 18000 67834</p>
              <p class="email">myjob@nursejob.in</p>
              <p class="add-48">
                48 - Blue business hub, <br />
                Kandivli, South Mumbai,
                <br />
                Mumbai - 549654
              </p>
            </div>
            <div>
              <p class="usf">USEFUL LINKS</p>
              <p class="about">About us</p>
              <p class="meet">Meet the team</p>
              <p class="Blog">Blog</p>
              <p class="Pricing">Pricing</p>
              <p class="FAQs">FAQs</p>
            </div>

            <div class="main-last-0-1">
              <p class="follow">Follow Us on</p>
              <div class="last-fb-01">
                <div>
                  <Facebook size={23} class="fb-2" />
                </div>
                <div>
                  <Twitter size={23} />
                </div>
                <div>
                  <Instagram size={23} />
                </div>
                <div>
                  <Linkedin size={23} />
                </div>
                <div>
                  <img src="./svgimg/youtub.png" class="you-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p class="footer-01">NURSE JOB.COM © 2022 All Rights Reserved</p>
          <p class="footer-02">Privacy Policy</p>
          <p class="footer-03">Terms of Use</p>
          <p class="footer-04">Refund and Cancellation Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
