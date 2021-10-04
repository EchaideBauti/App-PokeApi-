
const initialState= {
    pokemons: [],
    allPokemons: [],
    types:[],
    details:[],
 
    

    
}

function rootReducer(state=initialState,action){
    switch(action.type){
        case "GET_ALL_POKEMON":
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            
            }
        case 'FILTER_TYPE':
            const allPokemons = state.pokemons
            const typeFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types1.includes( action.payload))

            return {
                ...state,
                allPokemons: typeFiltered
            }
        case "GET_DETAILS":
            return{
                ...state,
                details:action.payload,
            }
        case"FILTER_CREATE":
            const OnlyApi = state.pokemons
            const filterPoke = action.payload === "db" ? state.allPokemons.filter((el) => el.id.length > 10) : OnlyApi
            return{
                ...state,
                allPokemons: action.payload === "all" ? state.pokemons : filterPoke
            }
        case "CREATE_POKEMON":
            return{
                ...state,
            }

        case "GET_ALL_TYPE":
            return{
                ...state,
                type:action.payload
            }
        case "GET_NAME_POKEMON":
            return{
                ...state,
                pokemons: action.payload
                
            }
        case "FILTER_ORDER":
            let Arr = action.payload === "A-Z" ?
                state.pokemons.sort((a,b)=> {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.pokemons.sort((a,b)=>{
                    if(a.name > b.name){
                        return -1;
                    }
                    if(a.name < b.name){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    allPokemons: Arr
                }
            case "FILTER_FUERZA":
                let ArrFuerza = action.payload === "+fuerte" ?
                state.pokemons.sort((a,b)=> {
                    if(a.attack > b.attack){
                        return 1;
                    }
                    if(a.attack < b.attack){
                        return -1;
                    }
                    return 0;
                }) :
                state.pokemons.sort((a,b)=>{
                    if(a.attack > b.attack){
                        return -1;
                    }
                    if(a.attack < b.attack){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    allPokemons: ArrFuerza
                }
        default:
            return state;
};
}

export default rootReducer;