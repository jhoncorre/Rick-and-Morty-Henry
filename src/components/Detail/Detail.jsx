import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
    const { id } = useParams();
    const [ character , setCharacter ] = useState({});

    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

        
    
    return (
        <div className={styles.container}>
            <Link to="/home">
                <button>Go back!</button>
            </Link>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Status: {character.status}</h3>
            
            
        </div>
    )
}