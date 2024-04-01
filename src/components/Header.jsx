import Logo from "./Logo";
import laptopIcon from "../images/laptop-code-solid.svg";
import "../scss/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={laptopIcon}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos Paintones</h1>
      </a>
      <Logo />
    </header>
  );
}

export default Header;
