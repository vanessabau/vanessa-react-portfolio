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
                Front End Platform Engineer with 5+ years of experience building
                and scaling enterprise web applications at lululemon. Expert in
                micro-frontend architecture, module federation, and React/Next.js
                platforms — delivering large-scale migrations, observability
                systems, and performance optimizations across 20+ engineering
                teams.
              </p>
              <p>
                I'm a technical leader who mentors engineers, drives Communities
                of Practice, and builds AI-powered developer tooling. I take
                end-to-end ownership of complex cross-stack initiatives with
                measurable business impact — from reducing page load times by 39%
                to stabilizing mission-critical applications to 95% uptime.
              </p>
              <hr />
              <h3>Core Competencies</h3>
              <a href="/vanessaBau-resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <p>
                <Link to="/portfolio">View Portfolio</Link>
              </p>
              <div id="skills" aria-label="Technical skills">
                <ul role="list">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Module Federation</li>
                  <li>Micro-Frontend Architecture</li>
                  <li>Webpack / RushJS</li>
                </ul>
                <ul role="list">
                  <li>AWS (Lambda, CloudWatch, S3)</li>
                  <li>Datadog</li>
                  <li>Akamai CDN</li>
                  <li>CI/CD (GitLab)</li>
                  <li>Terraform</li>
                  <li>Storybook</li>
                  <li>Contentful</li>
                  <li>GitHub Copilot Agents</li>
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
