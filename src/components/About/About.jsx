import styles from "./About.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function About(props) {
    const navigate = useNavigate()
    return (
        <div className={styles.aboutDiv}>
        <h1 className={styles.aboutH1}>Rick & Morty</h1>
        <div className= {styles.container}>
            <h1>Nosotros</h1>
            <br></br>
            <p> Mi nombre es Jhon Correa autor de este proyecto el cual esta  
                basado en lo que aprendimos en todo lo que hemos visto en el M2
                del BootCamp de HENRY , no ha sido facil pero gracias a algunos 
                compañeros de equipo lo he podido lograr que me gustaria mencionar
                como  son los señores Santiago Arguello, Jonathan Molero , Maximiliano Herr y 
                el famoso Erick...
                Gracias a todos por ayudarme tanto y llegar hasta aqui.
            </p>
        </div>
        <button className={styles.aboutButton} onClick={() => {
              navigate("/home");
            }} ><span className={styles.aboutSpan} >VOLVER</span></button>
        </div>
        
    )
}