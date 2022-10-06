import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="title">Pokemon Memory Game</h1>
      </div>
      <div></div>
      <div className="score-container">
        <div>
          <h3 className="current">current: {props.current}</h3>
          <h3 className="best">best: {props.best}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
