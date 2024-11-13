import "../styles/hero.css";
import heroImg from "../assets/Group_imgs.png";

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="hero_img" />

      <div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
