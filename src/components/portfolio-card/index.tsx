import clsx from "clsx";
import styles from "./PortfolioCard.module.css";
import type { Project } from "../../types";

function PortfolioCard(props: Project) {
  return (
    <article>
      <div className={clsx(styles.cardWrapper, "card")}>
        <img
          className="card-img-top"
          src={props.image}
          alt={`Screenshot of ${props.name}`}
          loading="lazy"
        />
        <div className={clsx(styles.cardBody, "card-body")}>
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">{props.description}</p>
          <p className="card-text">TECH: {props.tech}</p>
          <p>
            <a
              href={props.href}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noreferrer"
              aria-label={`View deployed app for ${props.name}`}
            >
              Deployed App
            </a>
            <a
              href={props.github}
              className="btn btn-success btn-sm"
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repository for ${props.name}`}
            >
              Github link
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

export default PortfolioCard;
