import React from "react";
// import blast from "../images/blastoise.png";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      {props["images"]["images"].map((e) => (
        <img
          src={e["image"]}
          alt={e["name"]}
          className="card"
          onClick={() => props.cardClicked(e["name"])}
        ></img>
      ))}
    </div>
  );
};

export default Card;
