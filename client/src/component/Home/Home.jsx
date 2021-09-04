import React from 'react';
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllPokemon} from '../../actions';
import Card from '../CardPokemon/Card';
import styleHome from '../Home/Home.module.css';
import SerchBar from '../SerchBar/SerchBar'
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';

const Home = () => {
    const dispatch = useDispatch();
    const AllPokemon = useSelector((state)=> state.pokemons)

    //PAGINADO 
    const [page,setpage] = useState(1);
    const [pokemonsxpage,setpokemonsxpage] = useState(12);
    const EndPokemon = page * pokemonsxpage;
    const StartPokemon = EndPokemon - pokemonsxpage;
    const pokemonXpage = AllPokemon.slice(StartPokemon, EndPokemon);

    const paginado = (pageNumber) => {
        setpage(pageNumber);
    }
    

    useEffect(()=>{
        dispatch(getAllPokemon());
    },[]);

    function handelclick(e){
        e.preventDefault();
        dispatch(getAllPokemon())
    }
    return (
        <div>
            <NavBar/>
            <hr />
            {/* <button onClick= {e =>{handelclick(e)}}>Volver a cargar los pokemons</button> */}
            <SerchBar/>
            <Paginado AllPokemon={AllPokemon.length} paginado={paginado} pokemonsxpage={pokemonsxpage}/>
        <div className={styleHome.container}>
            {/* SETEA TODOS LOS POKEMONS EN EL HOME */}
            {
                pokemonXpage && pokemonXpage.map(el => { return (<Card name={el.name} image={el.image} key={el.id}/>)})
            }
        </div>
        </div>
    )
};

export default Home;