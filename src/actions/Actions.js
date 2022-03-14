import {FETCH_ALL} from "./Types"


export const fetchAll = () => dispatch =>{
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    fetch(url)
        .then(response => response.json())
        .then(pokemons => dispatch({
            type : FETCH_ALL,
            payload : pokemons
        }))
}