import reactLogo from "./assets/react.svg";
import { useState, useEffect } from "react";
import Characters from 'react';
import Header from "./Components/Header/Header";
import "./styles/index.css";

export function App() {
  const [character, setCharacter] = useState([]);
  const [comic, setComic] = useState([]);
  const characters = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=67fab671b7006d9a1f390f9ff7c7abb2"
    );
    const data = await response.json();
    setCharacter(data.data.results);
  };

    const comics = async ()=>{
    const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?limit=5&apikey=67fab671b7006d9a1f390f9ff7c7abb2');
    const data = await response.json();
    setComic(data.data.results);

  }
  useEffect(() => {
    characters();
    comics();
  }, []);

  return (
    <div className="container-fluid home">
      <Header comics={comic}/>
    </div>
  );
}
