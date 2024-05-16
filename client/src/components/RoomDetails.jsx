import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/RoomDetails.css";

function RoomDetails() {
  const location = useLocation();
  const { room } = location.state;
  const [items, setItems] = useState([]) // Init items per room

  useEffect(() => {
    fetch(`https://protojam-groupe-d.onrender.com/show/?id=${room.id}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, [room.id]);

  return (
    <>
      <h1 className="detailsTitle">{room.name}</h1>
      <div className="DetailsContainer">
        <section className="RoomDetailsComponent">
          <img src={room.img} alt={room.name} className="roomDetailPic" />
        </section>
        <section className="details-conso">
          <h3>Consommation en détails</h3>
          {
            items.map(item => (
              <p key={item.id}>{item.name}</p>
            ))
          }
          
         
        </section>
      </div>
    </>
  );
}

export default RoomDetails;
