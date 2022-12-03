import React, { Component } from "react";
import PortfolioCard from "../../components/portfolio-card";
import props from "../../data/props.json";
import "./Portfolio.css";

//Create class component to pass portfolio information from props.json to the portfolio page and render the page. The cards will be rendered through the <PortfolioCard/> component
class Portfolio extends Component {
  state = {
    props,
  };

  render() {
    return (
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1 id="portfolio-title">Portfolio</h1>
          </div>

          <div className="post-wrapper container">
            {this.state.props.map((prop) => (
              <PortfolioCard
                id={prop.id}
                key={prop.id}
                name={prop.name}
                image={prop.image}
                description={prop.description}
                tech={prop.tech}
                href={prop.href}
                github={prop.github}
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
