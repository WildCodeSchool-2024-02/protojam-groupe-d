import RoomCards from "../components/RoomCards";
import ProgressionBar from "../components/ProgressionBar";

function HomePage() {
  return (
    <>
      <h1>Mon habitation</h1>
      <p>
        Cette application permet aux utilisateurs de prendre des décisions
        éclairées concernant leur consommation d'énergie, ce qui réduit à la
        fois leur impact environnemental et leurs factures d'électricité.
      </p>
      <ProgressionBar />
      <RoomCards />
    </>
  );
}

export default HomePage;
