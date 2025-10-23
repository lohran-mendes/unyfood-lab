import "./search.css";
import Button from "../button/button.jsx";

function Search() {
  return (
    <div className="SearchComponent">
      <input type="text" placeholder="Encontre um restaurante perto de você"/>
      <Button label="Pesquisar" />
    </div>
  );
}

export default Search;