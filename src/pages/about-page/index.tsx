import clsx from "clsx";
import BioPic from "../../components/bio-pic/index";
import ProfileCtas from "../../components/profile-ctas/index";
import styles from "./About.module.css";

const skills = [
  "React", "TypeScript", "JavaScript", "Next.js", "Node.js",
  "Module Federation", "Micro-Frontend Architecture", "Webpack / RushJS",
  "AWS (Lambda, CloudWatch, S3)", "Datadog", "Akamai CDN",
  "CI/CD (GitLab)", "Terraform", "Storybook", "Contentful", "GitHub Copilot Agents",
];

const AboutPage = () => (
  <>
    <section className="s1" aria-labelledby="welcome-heading">
      <div className="main-container">
        <div className={clsx("intro-wrapper", styles.heroWrapper)}>
          <div className={styles.heroText}>
            <p className={styles.overline}>Software Engineer</p>
            <h1 id="welcome-heading">Vanessa Bautista</h1>
            <p className={styles.tagline}>
              Front End Platform Engineer with 5+ years building enterprise
              web at scale. Micro-frontends, design systems, observability.
            </p>
            <div className={styles.heroCtas}>
              <ProfileCtas />
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <BioPic />
          </div>
        </div>
      </div>
    </section>

    <section className="s2" aria-labelledby="about-me-heading">
      <div className="main-container">
        <div className={styles.aboutContent}>
          <h2 id="about-me-heading">About</h2>
          <p>
            Front End Platform Engineer with 5+ years of experience building
            and scaling enterprise web applications. Expert in
            micro-frontend architecture, module federation, and React/Next.js
            platforms — delivering large-scale migrations, observability
            systems, and performance optimizations across 20+ engineering
            teams.
          </p>
          <p>
            I'm a technical leader who takes end-to-end ownership of complex cross-stack initiatives — modernizing legacy architectures, stabilizing mission-critical systems, and building AI-powered automations that improve developer experience and business outcomes, while mentoring engineers and fostering technical leadership across teams.
          </p>
          <h3>Core Competencies</h3>
          <div className={styles.skillsGrid} aria-label="Technical skills">
            {skills.map((skill) => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
          <h3>Let's Connect</h3>
          <div className={styles.resumeCta}>
            <ProfileCtas />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
