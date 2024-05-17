import { Link } from "react-router-dom";
import "../styles/Historic.css";
import warning from "../assets/images/warning.png";

function Historique() {
  return (
    <>
      <h1 className="historicTitle">Historique de consommation</h1>
      <section className="error-Container">
        <h2 className="historicSubTitle">Une erreur est survenue</h2>
        <div className="ParaContainer">
          <img src={warning} alt="warning icon" className="warningIcon" />
          <div>
            <p>Le service est momentanément indisponible...</p>
            <p>Nous vous invitons à réessayer ultérieurement.</p>
          </div>
        </div>
      </section>
      <Link to="/">
        <button className="goBack" type="button">
          &#10162;
        </button>
      </Link>

      <div className="scroll-to-top">
        <a href="#top" className="scroll-button">
          ↑
        </a>
      </div>
    </>
  );
}

export default Historique;
