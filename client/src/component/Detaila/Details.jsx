import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDetails} from '../../actions/index'
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styleDetail from '../Detaila/Details.module.css';
import BtnHome from '../imagenes/btnHome.png';

export default function Details(props){
    const dispatch = useDispatch();

    const MyDetail = useSelector((state) => state.details);

    useEffect(()=>{
        dispatch(getDetails(props.match.params.id));
    },[dispatch])

    return(
        <div>
            <NavBar/>
            {
                
                <div className={styleDetail.containerPrinc}>
                    <div className={styleDetail.detalle}><h1>DETALLES DEL POKEMON</h1></div>
                    <div className={styleDetail.containerCentr}>
                        <div className={styleDetail.titulo}>
                            <h1>{MyDetail.name}</h1>
                            <div>
                                <p className={styleDetail.pTitulo}>#{MyDetail.id}</p>
                            </div>
                        </div>
                        
                        <img src={MyDetail.image} width="200px" height="200px"/>

                        <div>
                            <p className={styleDetail.p}>Tipo: {MyDetail.types1 ? MyDetail.types1 : MyDetail.tipes}</p>
                            <p className={styleDetail.p}>Vida: {MyDetail.hp}</p>
                            <p className={styleDetail.p}>Ataque: {MyDetail.attack}</p>
                            <p className={styleDetail.p}>Defensa: {MyDetail.defense}</p>
                            <p className={styleDetail.p}>Velocidad: {MyDetail.speed}</p>
                            <p className={styleDetail.p}>Altura: {MyDetail.height}</p>
                            <p className={styleDetail.p}>Peso: {MyDetail.weight}</p>
                        </div>
                    </div>
 
                </div> 
                
            }
            <div className={styleDetail.contaiBtn} >
                    <Link to="/home/">
                        <img src={BtnHome} alt="Home" className={styleDetail.stylebtnhome}/>
                    </Link>
                </div>
            <Footer/>
        </div>
    )
    
}
