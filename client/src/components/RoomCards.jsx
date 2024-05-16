import { Link } from "react-router-dom";
import roomData from "../services/roomData";

import "../styles/RoomCards.css";

function RoomCards() {
  return (
    <div className="articleContainer">
      {roomData.map((room) => (
        <Link
          key={room.id}
          to={`/room/${room.name}`}
          state={{ room }}
          className="roomLink"
        >
          <article key={room.id} className="RoomCardsComponent">
            <h2 className="cardTitle">{room.name}</h2>
            <img src={room.img} alt={room.name} className={room.class} />
          </article>
        </Link>
      ))}
    </div>
  );
}

export default RoomCards;
