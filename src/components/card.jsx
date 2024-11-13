import "../styles/card.css";
import star from "../assets/Star1.png";

function Card({
  background,
  btnClass,
  rating,
  ratingNum,
  title,
  price,
  openSpots,
}) {
  let btn;

  if (openSpots === 0) {
    btn = "SOLD OUT";
  } else if (openSpots > 0) {
    btn = "ONLINE";
  }

  return (
    <div className="card">
      <div className={background}>
        <button className={btnClass}>{btn}</button>
      </div>

      <div>
        <p className="p1">
          <img className="img2" src={star} alt="star" /> <span>{rating}</span> (
          {ratingNum}) . USA
        </p>

        <p>{title}</p>

        <p>
          <span>From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
