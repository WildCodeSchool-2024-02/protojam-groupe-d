import { useLocation } from "react-router-dom";
import "../styles/RoomDetails.css";

function RoomDetails() {
  const location = useLocation();
  const { room } = location.state;
  return (
    <>
      <h1 className="detailsTitle">{room.name}</h1>
      <div className="DetailsContainer">
        <section className="RoomDetailsComponent">
          <img src={room.img} alt={room.name} className="roomDetailPic" />
        </section>
        <section className="details-conso">
          <h3>Consommation en détails</h3>
          <p>Lorem ipsum dolor, sit amet</p>
          <p>Lorem ipsum dolor, sit amet</p>
          <p>Lorem ipsum dolor, sit amet</p>
          <p>Lorem ipsum dolor, sit amet</p>
          <p>Lorem ipsum dolor, sit amet</p>
        </section>
      </div>
    </>
  );
}

export default RoomDetails;
