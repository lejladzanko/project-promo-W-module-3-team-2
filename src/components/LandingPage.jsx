import {Link} from "react-router-dom";
import mainImage from "../images/birth-venus.jpg.avif";
import "../scss/components/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landingContainer">
      <h1 className="landingContainer__title">Welcome to Project Paintones</h1>
      <img
        className="landingContainer__mainImage"
        src={mainImage}
        alt="birth-of-venus"
      />
      <Link to="/card">
        <button className="landingContainer__button">Create card</button>
      </Link>
    </div>
  );
}

export default LandingPage;
