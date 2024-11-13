import "../styles/App.css";
import Navbar from "./nav.jsx";
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import cardData from "./cardData.jsx";

function App() {
  const newCardData = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}
        // background={card.background}
        // btn={card.btn}
        // btnClass={card.btnClass}
        // rating={card.rating}
        // ratingNum={card.ratingNum}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">{newCardData}</div>
    </div>
  );
}

export default App;
