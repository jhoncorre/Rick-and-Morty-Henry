import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar (props) {
    return (
      <div className={styles.container} >
        <NavLink className={styles.button} to="/home">Home</NavLink>
        <NavLink className={styles.button} to="/favorites">Favorites</NavLink>
        <NavLink className={styles.button} to="/about">About</NavLink>
       <SearchBar onSearch={props.onSearch} />
      </div>
      
    );
  }