import React from "react";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="card-container">
      {
        <Card
          images={props}
          cardClicked={(clickedName) => {
            props.cardClicked(clickedName);
          }}
        />
      }
    </div>
  );
};

export default Cards;
