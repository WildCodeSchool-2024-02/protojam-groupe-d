import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/RoomDetails.css";

function RoomDetails() {
  const location = useLocation();
  const { room } = location.state;
  const [items, setItems] = useState([]); // Init items per room
  const [roomComsuption, setRoomComsuption] = useState(
    Number(room.rcomsuption)
  ); // Init room consum.

  useEffect(() => {
    fetch(`https://protojam-groupe-d.onrender.com/show/?id=${room.id}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, [room.id]);

  const handleConso = (iconsumption) =>
    setRoomComsuption((prevState) => prevState + iconsumption); // trigger le context pour MAJ la barre de conso en fonction des items switched

  return (
    <>
      <h1 className="detailsTitle">
        {room.name} : {roomComsuption} KWh
      </h1>
      <div className="DetailsContainer">
        <section className="RoomDetailsComponent">
          <img src={room.img} alt={room.name} className="roomDetailPic" />
        </section>
        <section className="details-conso">
          <h3>Consommation en détails</h3>
          {items.map((item) => (
            <table key={item.id}>
              <tbody>
                <tr>
                  <td className="consumptionItem">{item.name} :</td>
                  <td className="consumption">{item.iconsumption} KWh</td>
                  <td className="consumption">
                    <input
                      type="checkbox"
                      id="switch"
                      onClick={() => handleConso(item.iconsumption)}
                    />
                    <label htmlFor="switch">Toggle</label>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </section>
      </div>
    </>
  );
}

export default RoomDetails;
