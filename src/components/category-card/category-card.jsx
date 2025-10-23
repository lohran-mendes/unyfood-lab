import "./category-card.css";
import Button from "../button/button";

function CategoryCard({ label, backgroundColor, backgroundColorButton, urlImage }) {
  if (!backgroundColor) {
    backgroundColor = "#ed1c16";
  }

  return (
    <div className="CategoryCardComponent" style={{"--backgroundColor": backgroundColor}}>
      <div className="text">
        <h3>{label}</h3>
        <Button label="Ver opções" backgroundColor={backgroundColorButton} minWidth={"160px"} maxHeight={"34px"} />
      </div>
      <img src={urlImage} />
    </div>
  );
}

export default CategoryCard;
