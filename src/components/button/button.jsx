import "./button.css";

function Button({ label, backgroundColor, onClickAction, minWidth, maxHeight }) {
  if (!backgroundColor) {
    backgroundColor = "#ed1c16";
  }

  return (
    <button className="ButtonComponent" onClick={onClickAction} style={{ backgroundColor: backgroundColor, '--hover-color': backgroundColor, minWidth: minWidth, maxHeight: maxHeight }}>
      {label}
    </button>
  );
}

export default Button;