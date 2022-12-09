import { connect,useDispatch } from "react-redux";
import  Card  from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import styles from "./Favorites.modules.css";

export function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };
    return (

        <div style={{

            display: 'flex', justifyContent: 'center',
            marginTop: 15,
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
        
          }} >
            <div>
                <select
                    name='order'
                    onChange={handleOrder}>
                    <option value='ascendente'>Ascendente</option>
                    <option value='descendente'>Descendiente</option>
                </select>
                <select
                    name='gender'
                    onChange={handleFilter}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            <div style={{

display: 'flex', justifyContent: 'center',
marginTop: 15,
flexWrap: 'wrap',

}} >
            {myFavorites.map((character, index) => (
                <Card 
                id={character.id}
                key={index}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            ))}
            </div>
        </div>
    )
}
export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)