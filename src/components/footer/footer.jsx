import "./footer.css";

function Footer(){
  return (
    <footer className="FooterComponent">
      <p>© Todos os direitos reservados.</p>
      <div className="imgContainer">
      <a href="http://">
      <img src="src/assets/icon/linkedin.svg" alt="ícone do Linkedin"  width={30}/>
      </a>
      <a href="http://">
      <img src="src/assets/icon/instagram.svg" alt="ícone do Instagram." width={30}/>
      </a>
      </div>
    </footer>
  );
}

export default Footer;