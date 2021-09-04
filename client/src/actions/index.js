import axios from 'axios';

export function getAllPokemon(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemon/pokemons",{
            
        });
        return dispatch({
            type: "GET_ALL_POKEMON",
            payload:json.data
        })
    }
};

export function getAllType(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/type/",{

        });
        return dispatch({
            type:"GET_ALL_TYPE",
            payload:json.data
        }) 
    }
}

