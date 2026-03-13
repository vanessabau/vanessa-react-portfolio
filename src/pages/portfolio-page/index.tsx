import { Component } from "react";
import PortfolioCard from "../../components/portfolio-card";
import projectData from "../../data/props.json";
import type { Project } from "../../types";
import "./Portfolio.css";

interface PortfolioState {
  projects: Project[];
}

//Create class component to pass portfolio information from props.json to the portfolio page and render the page. The cards will be rendered through the <PortfolioCard/> component
class Portfolio extends Component<Record<string, never>, PortfolioState> {
  state: PortfolioState = {
    projects: projectData,
  };

  render() {
    return (
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1 id="portfolio-title">Portfolio</h1>
          </div>

          <div className="post-wrapper container">
            {this.state.projects.map((project) => (
              <PortfolioCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                tech={project.tech}
                href={project.href}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

//Export component
export default Portfolio;
