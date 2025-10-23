import Button from "../button/button";
import "./header.css";

function Header(){
  return(
    <header className="HeaderComponent">
      <h1>UnyFood</h1>
      <nav>
        <ul>
          <li><a href="">Categorias</a></li>
          <li><a href="">Restaurantes</a></li>
          <li><a href="">Informações</a></li>
          <li><a href="">Cadastre-se</a></li>
          <li><Button label="Entrar"/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;