const { Router } = require('express');
const axios = require('axios');
const {Pokemon,Type} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

//GET https://pokeapi.co/api/v2/pokemon

router.get("/pokemons", async (req,res,next)=>{
    try{
        const getAllApi = (await axios.get("https://pokeapi.co/api/v2/pokemon")).data.results;
        
        return res.status(201).json(getAllApi);
    }catch(e){
        next(e);
    }
})

// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

router.get("/one", async (req, res, next) => {
    const {pokemonId} = req.query;
    try {
        const getOneApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)).data.forms;
        console.log(getOneApi)
        return res.status(201).json(getOneApi)
    }catch (err){
        next(err);
    }
})
module.exports = router;
