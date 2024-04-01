import {Link} from "react-router-dom";
import logoAdalab from "../images/adalab.png";
import "../scss/components/Logo.scss";

function Logo() {
  return (
    <Link to="/">
      <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
    </Link>
  );
}

export default Logo;
