//Dependencies
import React from "react";
import "./PortfolioCard.css";

//Render portfolio cards with data from props.json
function PortfolioCard(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text" id="description">
            {props.description}
          </p>
          <p className="card-text" id="tech">
            TECH: {props.tech}
          </p>
          <p>
            <a
              href={props.href}
              className="btn btn-primary btn-sm"
              id="btn-deploy"
            >
              Deployed App
            </a>
            <a
              href={props.github}
              className="btn btn-success btn-sm"
              id="btn-github"
            >
              Github link
            </a>
          </p>
        </div>
      </div>

      {/* <a href={props.href}>
        <div className="card bg-light" style={{ cursor: "pointer" }}>
          <img className="card-img" src={props.image} alt={props.name} />
          <div
            className="card-img-overlay h-100 d-flex flex-column justify-content-end"
            style={{ padding: 0 }}
          >
            <div className="row">
              <div className="col-12">
                <h5
                  className="card-title bg-info text-center mb-3"
                  style={{ padding: "5px" }}
                >
                  {props.name}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a href={props.github}>
        <div className="github-link">
          <div id="github-header">{props.name} Github Link</div>
        </div>
      </a>
	</div> */}
    </div>
  );
}

//Export component
export default PortfolioCard;
