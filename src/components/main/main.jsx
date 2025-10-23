import CategoryList from "../category-list/category-list";
import Search from "../search/search.jsx";
import "./main.css";

function Main() {
  const mainTitle = "Nosso objetivo é servir você!"

  return (
    <main className="MainComponent">
      <h1>{mainTitle}</h1>
      <Search />
      <CategoryList />
    </main>
  );
}

export default Main;