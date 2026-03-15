import styles from "./Contact.module.css";

const ContactPage = () => (
  <section className="s1" aria-labelledby="connect-heading">
    <div className="main-container">
      <div className="greeting-wrapper">
        <h1 id="connect-heading">Let's Connect</h1>
        <p className={styles.subtitle}>Available for new opportunities</p>
      </div>

      <div className={styles.contactCards}>
        <div className={styles.contactCard}>
          <h3>GitHub</h3>
          <p>github.com/vanessabau</p>
          <a
            href="https://github.com/vanessabau"
            target="_blank"
            rel="noreferrer"
            className={styles.cardCta}
          >
            View Profile →
          </a>
        </div>

        <div className={styles.contactCard}>
          <h3>LinkedIn</h3>
          <p>vanessa-bautista</p>
          <a
            href="https://www.linkedin.com/in/vanessa-bautista-45906b19b/"
            target="_blank"
            rel="noreferrer"
            className={styles.cardCta}
          >
            Connect →
          </a>
        </div>

        <div className={styles.contactCard}>
          <h3>Email</h3>
          <p>vanessawebdev@gmail.com</p>
          <a
            href="mailto:vanessawebdev@gmail.com"
            className={styles.cardCta}
          >
            Email Me →
          </a>
        </div>
      </div>

      <div className={styles.secondaryLinks}>
        <a href="/vanessaBau-resume.pdf" target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a
          href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber"
          target="_blank"
          rel="noreferrer"
        >
          Application demos on YouTube
        </a>
      </div>
    </div>
  </section>
);

export default ContactPage;
