import React from "react";
import ConnectBk from "../../assets/images/connectBk.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Connect</h1>
        </div>

        <div className="intro-wrapper" id="contact-intro-wrapper">
          <img id="connect-background-img" src={ConnectBk} alt="bio_pic" />

          <div className="content-wrapper">
            <h3 id="reach-out">Reach Out</h3>
            <ul className="contact">
              <li>
                <a href="../../vanessaBau-resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
              <hr />
              <li>
                <a href="https://github.com/vanessabau">Github</a>
              </li>
              <hr />
              <li>
                <a href="https://www.linkedin.com/in/vanessa-bautista-45906b19b/">
                  Linkedin
                </a>
              </li>
              <hr />
              <li>
                <a href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber">
                  Application demos on YouTube
                </a>
              </li>
              <hr />

              <li>
                <a href="mailto:vanessawebdev@gmail.com" target="_blank">
                  Email: vanessawebdev@gmail.com
                </a>
              </li>
              <hr />
              <li>Phone: 916-225-4599</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
