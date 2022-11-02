import { useState, useEffect } from "react";
import "../../styles/index.css";
function Header({ comics }) {
  //const [comic, setComic] = useState([]);

  console.log(comics);

  return (
    <div>
      <h1 className="tittle">Catalogo Marvel</h1>
      <div className="d-flex">
        {comics.map((item, i) => {
          return (
            <div className="boton" key={i}>
              <a href="#">{item.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
