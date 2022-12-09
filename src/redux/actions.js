import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";



export function addFavorites(id) {
    return {
        type: ADD_FAVORITES,
        payload: id

    }
}
export function deleteFavorites(id) {
    return {
        type: DELETE_FAVORITES,
        payload: id

    }
}
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    };
};