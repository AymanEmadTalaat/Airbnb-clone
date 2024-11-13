import "../styles/nav.css";
import logo from "../assets/airbnb1.png";

function Navbar() {
  return (
    <nav>
      <img id="logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
