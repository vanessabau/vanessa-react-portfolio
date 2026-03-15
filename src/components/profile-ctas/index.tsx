import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./ProfileCtas.module.css";

const ProfileCtas = () => (
  <div className={styles.wrapper}>
    <div className={styles.ctaButtons}>
      <a
        href="/vanessaBau-resume.pdf"
        target="_blank"
        rel="noreferrer"
        className={clsx(styles.ctaBtn, styles.ctaBtnPrimary)}
      >
        View Resume
      </a>
      <Link to="/portfolio" className={clsx(styles.ctaBtn, styles.ctaBtnOutline)}>
        View Portfolio
      </Link>
    </div>
    <div className={styles.socialLinks}>
      <a href="https://github.com/vanessabau" target="_blank" rel="noreferrer">GitHub</a>
      <span aria-hidden="true">·</span>
      <a href="https://www.linkedin.com/in/vanessa-bautista-45906b19b/" target="_blank" rel="noreferrer">LinkedIn</a>
      <span aria-hidden="true">·</span>
      <a href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber" target="_blank" rel="noreferrer">YouTube</a>
      <span aria-hidden="true">·</span>
      <a href="https://www.instagram.com/vanessawebdev" target="_blank" rel="noreferrer">Instagram</a>
    </div>
  </div>
);

export default ProfileCtas;
