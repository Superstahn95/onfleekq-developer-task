import "./card.css";
import visacard from "../../assets/visacard.png";
function Card() {
  return (
    <div className="card--wrapper">
      <div className="card--header">
        <span className="card-text">My Card</span>
        <button className="card--button">..</button>
      </div>
      <div className="card--image--wrapper">
        <img src={visacard} alt="card" className="card--image" />
      </div>
    </div>
  );
}

export default Card;
