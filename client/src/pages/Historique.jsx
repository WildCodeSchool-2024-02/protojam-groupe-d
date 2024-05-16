import { Link } from "react-router-dom";

function Historique() {
  return( <>
  <p>hello</p>
  <Link to="/">
        <button className="goBack" type="button">
          &#10162;
        </button>
  </Link>
   
  <div className="scroll-to-top">
      <a href="#top" className="scroll-button">↑</a>
    </div>
  </>);
}

export default Historique;
