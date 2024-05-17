import { useConso } from "../contexts/ConsoContext";

function ProgressionBar() {
  const { consoGlobal } = useConso();

  // notre value d'entre c'est 1.2, notre base total, c'est 4.8
  // Notre progressbar c'est 100% et 1.2 DOIT DONNER 25

  const progressBar = (consoGlobal * 100) / 4.8;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progressBar}%` }}
        id="progress-bar"
      >
        &nbsp;
      </div>
    </div>
  );
}

export default ProgressionBar;
