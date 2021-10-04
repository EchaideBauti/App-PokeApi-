import axios from 'axios';

export function getAllPokemon(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemon/pokemons");
    
        return dispatch({
            type: "GET_ALL_POKEMON",
            payload:json.data
        })
    }
};

export function FilterCreate(payload){
    return{
        type:"FILTER_CREATE",
        payload
    }
}

export function filterType(payload){
        return {
            type:"FILTER_TYPE",
            payload
        };
};

export function PostCreatePokemon(payload){
    return async function(dispatch){
        var info = await axios.post("http://localhost:3001/pokemon/pokemons",payload);
        return info
    }
}

export function GetAllType(){
    return async function(dispatch){
        var infoType = await axios.get("http://localhost:3001/type/")
        return dispatch({
            type:"GET_ALL_TYPE",
            payload:infoType.data
        })
    }
}

export function getNamePokemon(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/pokemon/?name=" + name,{

            });
            return dispatch({
                type:"GET_NAME_POKEMON",
                payload: json.data
            })
        }catch(err){
            console.log(err)
        }
    };
    
} 

export function getDetails(id){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/pokemon/${id}`)
            
            return dispatch({
                type:"GET_DETAILS",
                payload: json.data
                
            })
        }catch(err){
            console.log(err);
        }
    }
}
export function filterSort(payload){
    return{
        type:"FILTER_ORDER",
        payload
    }
}
export function filterFuerza(payload){
    return{
        type:"FILTER_FUERZA",
        payload
    }
}