import RoomCards from "../components/RoomCards";
import { useConso } from "../contexts/ConsoContext";

function HomePage() {
  const { consoGlobal } = useConso();
  return (
    <>
      <h1>Mon habitation | conso : {consoGlobal.toFixed(1)} KWh</h1>
      <p className="HomePara">
        Cette application permet aux utilisateurs de prendre des décisions
        éclairées concernant leur consommation d'énergie, ce qui réduit à la
        fois leur impact environnemental et leurs factures d'électricité.
      </p>
      <RoomCards />
    </>
  );
}

export default HomePage;
