import CategoryList from "../category-list/category-list";
import RestaurantList from "../restaurant-list/restaurant-list/restaurant-list.jsx";
import Search from "../search/search.jsx";
import "./main.css";

function Main() {
  const mainTitle = "Nosso objetivo é servir você!"

  return (
    <main className="MainComponent">
      <h1>{mainTitle}</h1>
      <Search />
      <CategoryList />
      <hr />
      <RestaurantList/>
    </main>
  );
}

export default Main;