import { Link } from "react-router-dom";
import "../styles/Historic.css";

function Historique() {
  return (
    <>
      <h1 className="historicTitle">Votre historique</h1>
      <h2 className="historicSubTitle">Une erreur est survenue</h2>
      <div className="ParaContainer">
        <p>Le service est momentanément indisponible...</p>
        <p>Nous vous invitons à réessayer ultérieurement</p>
      </div>
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
