import React,{useState} from 'react';
import styleSeachBar from '../SerchBar/SerchBar.module.css';
import {useDispatch} from 'react-redux';
import {filterType,getNamePokemon,getAllPokemon,FilterCreate} from '../../actions';
import Actualizar from '../../component/imagenes/BtnActualizar.png';


const SerchBar = ()=> {
    
    //estado SerchBar
    const dispatch = useDispatch();
    const[name , setName] = useState("")
  

    //Filtrado
    function handleFilterType(e){
        e.preventDefault()
        dispatch(filterType(e.target.value))
    }
   
    
    //SearchBar
    function handleSearch(e){
        e.preventDefault();
        setName(e.target.value)
        
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNamePokemon(name));   
        setName("")
          
    }
    //Btn Actualizar
    function handleClick(e){
        e.preventDefault()
        dispatch(getAllPokemon())
    }
    //Filtro
    function handleFilter(e){
        e.preventDefault();
        dispatch(FilterCreate(e.target.value))
    }
    return (
        <div className={styleSeachBar.container}>
            <div className={styleSeachBar.btnActualizar}>
                <img src={Actualizar} alt="Actualizar" onClick={e => handleClick(e)}/>
                {/* <button onClick={(e) => handleClick(e)}>Actualizar</button> */}
            </div>

            <form className={styleSeachBar.formsearch} onSubmit={e => handleSubmit(e)}>
                <div>
                    <input onChange={e => handleSearch(e)} className={styleSeachBar.inputSeach} value={name}type="text" placeholder="Busca tu pokemon!"/>
                </div>
                <div>
                    <button  className={styleSeachBar.button} type="submit">Buscar</button>
                </div>
                </form>
            
                <div className={styleSeachBar.dbapi}>
                    <select onClick={e => handleFilter(e)} >
                        <option value="db">Created</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div className={styleSeachBar.filterType}>
                    <select onChange={e => handleFilterType(e)} >
                        <option value="all">All</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">fighting</option>
                        <option value="flying">flying</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="rock">rock</option>
                        <option value="bug">bug</option>
                        <option value="ghost">ghost</option>
                        <option value="steel">steel</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="psychic">psychic</option>
                        <option value="ice">ice</option>
                        <option value="dragon">dragon</option>
                        <option value="dark">dark</option>
                        <option value="fairy">fairy</option>
                        <option value="unknown">unknown</option>
                        <option value="shadow">shadow</option>
                    </select>
                </div>
        </div>
    )
};

export default SerchBar;