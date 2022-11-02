import { useState, useEffect } from "react";
import '../../styles/index.css';
function Characters({ character }) {
  
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    setComic(comics);
    console.log(comic.tittle)
  }, []);

  return (
    <div>
      <ul>
        {comic.map((item, i) => {
          return <li key={i}>{item.tittle}</li>;
        })}
      </ul>
    </div>
  );
}

export default Characters;
