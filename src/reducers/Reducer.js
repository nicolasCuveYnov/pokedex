import { FETCH_ALL } from "../actions/Types";

const initialState = {
    searchedPokemons : []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL:
            return{
                ...state,
                searchedPokemons : action.payload
            }
        default:
            return state
    }
}