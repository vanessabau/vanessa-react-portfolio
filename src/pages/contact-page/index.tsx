import ConnectBk from "../../assets/images/connectBk.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="s1" aria-labelledby="connect-heading">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1 id="connect-heading">Connect</h1>
        </div>

        <div className="intro-wrapper" id="contact-intro-wrapper">
          <img id="connect-background-img" src={ConnectBk} alt="" />

          <div className="content-wrapper">
            <h2 id="reach-out">Reach Out</h2>
            <ul className="contact" role="list" aria-labelledby="reach-out">
              <li>
                <a
                  href="../../vanessaBau-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/vanessabau">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vanessa-bautista-45906b19b/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCJgiKl0JhapfuzCyylGHKbQ?view_as=subscriber">
                  Application demos on YouTube
                </a>
              </li>
              <li>
                <a href="mailto:vanessawebdev@gmail.com">
                  Email: vanessawebdev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9162254599">Phone: 916-225-4599</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
