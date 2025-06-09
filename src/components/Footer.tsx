import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="one">
        <h1>Open-Notes</h1>
        <p>
          {"> "}
          By Me for You <span className="animate-blinking">_</span>
        </p>
      </div>
      <div className="two">
        <p>
          My mission is to share distilled, real-world knowledge, ensuring that
          aspiring programmers gain a holistic understanding of the development
          landscape from day one. <span className="animate-blinking">_</span>
        </p>
      </div>
      <div className="three">
        <p>
          <a href="https://skymazter.github.io/">Oscar Comunidad</a>
        </p>
        <p>
          <Link to={"https://www.linkedin.com/in/oscar-comunidad-90b224168/"}>
            LinkedIn
          </Link>
        </p>
        <p>
          <Link to={"https://github.com/SkyMazter"}>GitHub</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
