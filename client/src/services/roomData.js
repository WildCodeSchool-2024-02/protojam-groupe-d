import kitchen from "../assets/images/kitchen.png";
import living from "../assets/images/living.png";
import bedroom from "../assets/images/bedroom.png";
import sdb from "../assets/images/sdb.png";
import garage from "../assets/images/garage.png";

const roomData = [
  {
    id: 1,
    name: "Cuisine",
    img: kitchen,
    class: "kitchenCard",
    rcomsuption: 2.5,
  },
  {
    id: 2,
    name: "Salon",
    img: living,
    class: "livingCard",
    rcomsuption: 1.1,
  },
  {
    id: 3,
    name: "Salle de bain",
    img: sdb,
    class: "bathroomCard",
    rcomsuption: 1.4,
  },
  {
    id: 4,
    name: "Chambre",
    img: bedroom,
    class: "bedroomCard",
    rcomsuption: 0.7,
  },

  {
    id: 5,
    name: "Garage",
    img: garage,
    class: "garageCard",
    rcomsuption: 12.3,
  },
];

export default roomData;
