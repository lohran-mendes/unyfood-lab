import CategoryCard from "../category-card/category-card";
import "./category-list.css";

function CategoryList() {
  return (
    <ul className="CategoryListComponent">
      <li>
        <CategoryCard
          label={"Comidas"}
          backgroundColor={"#ED1C16"}
          backgroundColorButton={"#BC1611"}
          urlImage={"src/assets/comidas.svg"}
        />
      </li>
      <li>
        <CategoryCard
          label={"Bebidas"}
          backgroundColor={"#009432"}
          backgroundColorButton={"#06752B"}
          urlImage={"src/assets/bebidas.svg"}
        />
      </li>
    </ul>
  );
}

export default CategoryList;
