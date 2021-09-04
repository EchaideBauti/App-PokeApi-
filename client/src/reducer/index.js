
const initialState= {
    pokemons: [],
    types:[]
}

function rootReducer(state=initialState,action){
    switch(action.type){
        case "GET_ALL_POKEMON":
            return{
                ...state,
                pokemons: action.payload
            }
        case "GET_ALL_TYPE":
            return{
                ...state,
                types:action.payload
            }
            default:
                return state;
};
}

export default rootReducer;