import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useConso } from "../contexts/ConsoContext";

import "../styles/RoomDetails.css";

function RoomDetails() {
  const { handleConso } = useConso();
  const location = useLocation();
  const { room } = location.state;
  const [items, setItems] = useState([
    {
      id: 10,
      name: "Machine à laver",
      consumption: 0.5,
      light_on: 0,
      rname: "Salle de bain",
      rconsumption: 3,
      is_active: 0,
      is_always_active: 0,
      iconsumption: 0.5,
    },
  ]); // Init items per room

  useEffect(() => {
    fetch(`https://protojam-groupe-d.onrender.com/show/?id=${room.id}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, [room.id]);

  // eslint-disable-next-line no-unused-vars
  const [roomComsuption, setRoomComsuption] = useState(
    Number(items[0].rconsumption)
  ); // Init room consum.

  const [toogle, setToogle] = useState(true); // Init toogle swtich

  const handleToggle = () => {
    setToogle(!toogle); // switch
    setRoomComsuption(() => (!toogle ? room.rcomsuption : 0));
    handleConso(room.rcomsuption, toogle);
  };

  console.info(items[0]);

  return (
    <>
      <h1 className="detailsTitle">
        {room.name} : {items[0].rconsumption} KWh
      </h1>
      <div className="DetailsContainer">
        <section className="RoomDetailsComponent">
          <img
            src={room.img}
            alt={room.name}
            className="roomDetailPic"
            style={{
              boxShadow: toogle
                ? "#f5efb5 0px 6px 45px"
                : "#f5efb5 0px 0px 0px",
            }}
          />
          <input
            type="checkbox"
            id="switch"
            checked={toogle}
            onClick={() => handleToggle()}
          />
          <label htmlFor="switch">Toggle</label>
        </section>
        <section className="details-conso">
          <h3>Consommation en détails</h3>
          {items.map((item) => (
            <table key={item.id}>
              <tbody>
                <tr>
                  <td className="consumptionItem">{item.name} :</td>
                  <td className="consumption">{item.iconsumption} KWh</td>
                </tr>
              </tbody>
            </table>
          ))}
        </section>
      </div>
      <Link to="/">
        <button className="goBack" type="button">
          &#10162;
        </button>
      </Link>
    </>
  );
}

export default RoomDetails;
