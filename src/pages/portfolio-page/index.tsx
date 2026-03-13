import clsx from "clsx";
import PortfolioCard from "../../components/portfolio-card";
import projects from "../../data/projects";
import styles from "./Portfolio.module.css";

const Portfolio = () => (
  <section className="s1" aria-labelledby="portfolio-title">
    <div className="main-container">
      <div className="greeting-wrapper">
        <h1 id="portfolio-title">Portfolio</h1>
      </div>
      <div className={clsx(styles.postWrapper, "container")}>
        {projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
