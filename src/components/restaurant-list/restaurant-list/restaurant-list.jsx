import RestaurantCard from "../../restaurant-card/restaurant-card";
import "./restaurant-list.css";

function RestaurantList() {
  return (
    <div className="RestaurantListComponent">
      <h2>Conheça nossos restaurantes</h2>
      <ul>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
        <li><RestaurantCard/></li>
      </ul>
    </div>
  );
}

export default RestaurantList;