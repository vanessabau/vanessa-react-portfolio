import React from "react";

import BioPic from "../../components/bio-pic/index";
import AboutText from "../../components/about-text/index";

import "./About.css";

const AboutPage = () => {
  return (
    <>
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper" id="welcome-wrapper">
            <h1>Welcome, I'm Vanessa Bautista</h1>
          </div>
          <div className="intro-wrapper" id="about-intro-wrapper">
            <div className="left-column">
              <BioPic />
            </div>

            <div className="right-column">
              <AboutText />
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>About Me</h4>
              <p>
                With grit and determination I have forged careers in the Visual
                and Performing Arts, Marketing, and as a Restaurateur, learning
                these industries from the ground up. I am known for being
                passionate and dedicated in all I do, and am always ready to
                roll up my sleeves and find a creative solution to the challenge
                at hand.
              </p>
              <p>
                Recently I shifted gears towards web development where my hunger
                for learning, logic, and creativity thrives. I bring forward the
                insight and skills learned from previous experiences with
                dutiful application to the world of web development.
              </p>
              <hr />
              <h4>FULL STACK AWESOMENESS</h4>
              <p>Let's get this party started</p>
              <a href="../../vanessaBau-resume.pdf" target="_blank">
                View Resume
              </a>
              <p>
                <a
                  href="https://vanessaro-portfolio.herokuapp.com/portfolio"
                  target="_blank"
                >
                  View Portfolio
                </a>
              </p>
              <div id="skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>ES6</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Git</li>
                </ul>
                <ul>
                  <li>React</li>
                  <li>React-Testing-Library</li>
                  <li>Jest</li>
                  <li>React Native</li>
                  <li>Sequelize/MySQL</li>
                  <li>MongoDB/Mongoose</li>
                  <li>Progressive Web Apps</li>
                  <li>Github/Heroku</li>
                </ul>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber"
                target="_blank"
              >
                <img
                  id="social_img"
                  src="https://raw.githubusercontent.com/vanessabau/vanessaro/master/images/youtubevro.png"
                  alt="youtube"
                />
              </a>
              <h3>Find me on YouTube</h3>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber"
              >
                YouTube: Vanessa Bautista
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="color-bar"></div>
    </>
  );
};

export default AboutPage;
