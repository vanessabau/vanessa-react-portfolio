import { Link } from "react-router-dom";
import clsx from "clsx";
import BioPic from "../../components/bio-pic/index";
import AboutText from "../../components/about-text/index";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <>
      <section className="s1" aria-labelledby="welcome-heading">
        <div className="main-container">
          <div className="greeting-wrapper" id="welcome-wrapper">
            <h1 id="welcome-heading">Welcome, I'm Vanessa Bautista</h1>
          </div>
          <div className={clsx("intro-wrapper", styles.aboutIntroWrapper)}>
            <div className={styles.leftColumn}>
              <BioPic />
            </div>
            <div className={styles.rightColumn}>
              <AboutText />
            </div>
          </div>
        </div>
      </section>

      <section className="s2" aria-labelledby="about-me-heading">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h2 id="about-me-heading">About Me</h2>
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
              <h3>Full Stack Awesomeness</h3>
              <p>Let's get this party started</p>
              <a href="/vanessaBau-resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <p>
                <Link to="/portfolio">View Portfolio</Link>
              </p>
              <div id="skills" aria-label="Technical skills">
                <ul role="list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>ES6</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Git</li>
                </ul>
                <ul role="list">
                  <li>React</li>
                  <li>React-Testing-Library</li>
                  <li>Jest</li>
                  <li>React Native</li>
                  <li>Sequelize/MySQL</li>
                  <li>MongoDB/Mongoose</li>
                  <li>Progressive Web Apps</li>
                  <li>GitHub/Vercel</li>
                </ul>
              </div>
            </div>

            <div className="social-links">
              <h2>Find me on YouTube</h2>
              <a
                href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber"
                target="_blank"
                rel="noreferrer"
              >
                <span>YouTube: Vanessa Bautista</span>
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
