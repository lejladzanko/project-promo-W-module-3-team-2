import logoAdalab from "../images/adalab.png";
import "../scss/components/Logo.scss";

function Logo() {
  return (
    <a href="/">
      <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
    </a>
  );
}

export default Logo;
