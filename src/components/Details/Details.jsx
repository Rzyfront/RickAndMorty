import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = ()=>{
    
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    console.log(detailId);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
    }, [detailId]);

    console.log(character);

    return(
        <div>
            <Link to={'/home'}>
            <button>Back</button>
            </Link>
            
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.specie}</p>
            <p>{character?.gender}</p>
            <p>{character?.orgin?.name}</p>
            <img src={character?.image} alt={character?.name} />
        </div>
    );
}

export default Details;
