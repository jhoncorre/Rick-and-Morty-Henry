import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

const initialState = {
    myFavorites: []

}

export default function rootReducer(state = initialState,{type, payload}) {
    switch (type) {
        case ADD_FAVORITES:
          return {
            ...state,
            myFavorites: [...state.myFavorites, payload]
          } 
          case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter(
                fav => fav.id !== payload
            )
          return {
            ...state,
            myFavorites: filtered
          } 
            default:
            return state;
    }
}