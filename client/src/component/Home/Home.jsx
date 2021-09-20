import React from 'react';
import {Link} from 'react-router-dom';
import { useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {filterSort,filterFuerza} from '../../actions';
import Card from '../CardPokemon/Card';
import styleHome from '../Home/Home.module.css';
import SerchBar from '../SerchBar/SerchBar'
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';
import Footer from '../Footer/Footer';

const Home = () => {
    const dispatch = useDispatch();
    const AllPokemon = useSelector((state) => state.pokemons);

    //PAGINADO 
    const [page,setPage] = useState(1); //pagina actual que arranca en 1
    const [pokemonsxpage] = useState(12);//pokemon por pagina
    const EndPokemon = page * pokemonsxpage;
    const StartPokemon = EndPokemon - pokemonsxpage;
    const pokemonXpage = AllPokemon.slice(StartPokemon, EndPokemon);
    //ESTADOS DE LOS FILTROS
    const[order, setOrder] = useState("")
    const[fuerza,setFuerza] = useState("")

    const paginado = (pageNumber) => {
        setPage(pageNumber);
    }

    //FILTROS
    function handleFilterAZ(e){
        e.preventDefault();
        dispatch(filterSort(e.target.value))
        setPage(1)
        setOrder(e.target.value)
    }
    function handleFuerza(e){
        e.preventDefault()
        dispatch(filterFuerza(e.target.value))
        setPage(1)
        setFuerza(e.target.value)
    }
    return (
        <div>
            <NavBar/>
            <hr />
            <SerchBar/>
            <div className={styleHome.filterAZ}>
                <select onClick={(e) => handleFilterAZ(e) }>
                    <option value="A-Z">A - Z</option> 
                    <option value="Z-A">Z - A</option>
                </select>
            </div>
            <div className={styleHome.filterFuerza}>
                <select onChange={(e) => handleFuerza(e)}>
                    <option value="-fuerte">+ Ataque</option>
                    <option value="+fuerte">- Ataque</option>
                </select>
            </div>

            <Paginado
                AllPokemon={AllPokemon.length} 
                paginado={paginado} 
                pokemonsxpage={pokemonsxpage}
            />
            <div className={styleHome.container}>
            
            
                {pokemonXpage && pokemonXpage.map(el => { 
                    return (
                        <div>
                            <Link to={"/home/detail/" + el.id}>
                                <Card 
                                    name={el.name} 
                                    image={el.image} 
                                    types1={el.types1}
                                    types={el.types}
                                    key={el.id} 
                                    attack={el.attack} 
                                    defense={el.defense}
                                    hp={el.hp}
                                /> 
                            </Link>
                        </div> 
                    ) 
                })
            }
        </div>
        <Footer/>
        </div>
    )
};

export default Home;