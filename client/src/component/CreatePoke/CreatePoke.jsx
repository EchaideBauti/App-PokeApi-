import React,{useState,useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import styleCreate from '../CreatePoke/CreatePoke.module.css';
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllType ,PostCreatePokemon} from '../../actions';
import BtnHome from '../imagenes/btnHome.png';

function Validate(value){
        let errors = {};
    
        if(!value.name){
            errors.name = "Se requiere un nombre";
        }else if(!value.image){
            errors.image = "Se requiere una imagen"
        }
    
        return errors;
    }

const CreatePoke = () => {
    
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    const Type = useSelector((state) => state.type);
    
    useEffect(()=>{
        dispatch(GetAllType())
    },[dispatch])

    const [value , setValue ] = useState({
        name:"",
        types:[],
        image:"",
        hp:"",
        attack:"",
        defense:"",
        
    });
    

    function handleOnChange(e){
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
        setErrors(Validate({
            ...value,
            [e.target.name]:e.target.value
        }))
     
    }

    function handleSelect(e){
        setValue({
            ...value,
            types: [e.target.value]
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(PostCreatePokemon(value))
        console.log("VALORRRRRRR",value)
        setValue({
            name:"",
            types:[],
            image:"",
            hp:"",
            attack:"",
            defense:""
        })
        alert("creado")
    }
    return(
        <div>
            <NavBar/>
            <hr />
            <div >
                <form>
                    <div className={styleCreate.containerAll}>
                        <div className={styleCreate.titleCP}>
                            <h2>Crea tu propio pokemon</h2>
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <label>Nombre: </label>
                            <input name="name" onChange={handleOnChange} value={value.name} type="text"/>
                            {errors.name && (<p className={styleCreate.p1}>{errors.name}</p>)}
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <label>Tipo: </label>
                            <select onChange={(e) => handleSelect(e)}>
                                {
                                Type && Type.map(el=> {
                                    return (
                                        <option value={el.name}>{el.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <input name="types" onChange={handleOnChange} value={value.types}  type="text"/>
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <label>Imagen: </label>
                            <input name="image" onChange={handleOnChange} value={value.image} type="text"/>
                            {errors.image && (<p className={styleCreate.p2}>{errors.image}</p>)}
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <label>Defensa: </label>
                            <input type="text" onChange={handleOnChange} value={value.defense} name="defense"/>
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <label>Attack: </label>
                            <input type="text" name="attack"onChange={handleOnChange} value={value.attack}/>
                        </div>
                        <   div className={styleCreate.AllContainer}>
                            <label>Hp: </label>
                            <input type="text" name="hp" onChange={handleOnChange} value={value.hp}/>
                        </div>
                        <div className={styleCreate.AllContainer}>
                            <button type="submit" className={styleCreate.btnSumit} onClick={(e)=>handleSubmit(e)}>Crear</button>
                        </div>
                    </div>
                    
                </form>

                <div className={styleCreate.btnHome}>
                    <Link to="/home/">
                        <img src={BtnHome} alt="home" />
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
};

export default CreatePoke;

// Vida - hp
// Fuerza - attack
// Defensa - defense
// Velocidad - speed
// Altura - height
// Peso - weight