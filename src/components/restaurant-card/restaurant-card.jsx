import "./restaurant-card.css";

function RestaurantCard() {
  return (
    <div className="RestaurantCardComponent">
      <div className="img-card-container">
        <img src="src/assets/icon/mcdonald.png" alt="" />
      </div>
      <div className="info-card-container">
        <h3>UnyDonald's</h3>
        <span>Fast-food</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
