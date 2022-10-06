import React, { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./styles/index.css";
import blastoiseImg from "./images/blastoise.png";
import bulbasaurImg from "./images/bulbasaur.png";
import charizardImg from "./images/charizard.png";
import charmanderImg from "./images/charmander.jpg";
import mewImg from "./images/mew.jpg";
import mewtwoImg from "./images/mewtwo.jpg";
import pidgyImg from "./images/pidgy.jpg";
import pikachuImg from "./images/pikachu.jpg";
import squirtleImg from "./images/squirtle.jpg";
import venasuarImg from "./images/venasuar.jpg";

function App() {
  const [images, setImages] = useState([
    {
      name: "blastoise",
      image: blastoiseImg,
    },
    {
      name: "bulbasaur",
      image: bulbasaurImg,
    },
    {
      name: "charizard",
      image: charizardImg,
    },
    {
      name: "charmander",
      image: charmanderImg,
    },
    {
      name: "mew",
      image: mewImg,
    },
    {
      name: "mewtwo",
      image: mewtwoImg,
    },
    {
      name: "pidgy",
      image: pidgyImg,
    },
    {
      name: "pikachu",
      image: pikachuImg,
    },
    {
      name: "squirtle",
      image: squirtleImg,
    },
    {
      name: "venasuar",
      image: venasuarImg,
    },
  ]);

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [guessed, setGuessed] = useState([]);

  function shuffleCards() {
    let result = images;
    result.sort(() => Math.random() - 0.5);
    return result;
  }

  // shuffleCards();

  function incrementGame(clickedName) {
    console.log(clickedName);
    if (!guessed.includes(clickedName)) {
      scoreHandler();
      setGuessed([...guessed, clickedName]);
    } else {
      setCurrentScore(0);
      setGuessed([]);
    }
  }

  function scoreHandler() {
    if (currentScore >= highScore) setHighScore(currentScore + 1);
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className="App">
      <Header current={currentScore} best={highScore} />
      <Cards
        images={shuffleCards()}
        cardClicked={(clickedName) => {
          incrementGame(clickedName);
        }}
      />
    </div>
  );
}

export default App;
