import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App () {

const[ characters, setCharacters] = useState([]);

function onSearch(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          if (!characters.find(el => el.id==id))
            setCharacters((oldChars) => [...oldChars, data]);
          else
            window.alert('El personaje con este ID ya se encuentra agregado');
        } 
        else {
           window.alert('No hay personajes con ese ID');
        }
     });
};
//function onSearch(character) {
//    fetch(`https://rickandmortyapi.com/api/character/${character}`)
//       .then((response) => response.json())
//       .then((data) => {
//          if (data.name) {
//             setCharacters((oldChars) => [...oldChars, data]);
 //         } else {
//             window.alert('No hay personajes con ese ID');
//          }
//        });
 // }
//const onClose = (id) => {
 // setCharacters(characters.filter((char) => char.id !== id))
  //};
  const onClose = (id) => {
    setCharacters((characters) =>
        characters.filter((char) => char.id !== id)
    );
};

const location = useLocation();

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = "jhondcorrearuiz@gmail.com";
const password = "12345678";

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate("/");
}, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
  }

export default App;
