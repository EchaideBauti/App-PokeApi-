const { Router } = require('express');
const axios = require('axios');
const {Pokemon,Type} = require('../db')
const {v4:uuid} = require('uuid')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

//GET https://pokeapi.co/api/v2/pokemon

router.get("/pokemons", async (req,res,next)=>{
    //Obtener de la API
    const Pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const Pokemon2 = await axios.get(Pokemon1.data.next);
    const AllPokemons = [...Pokemon1.data.results,...Pokemon2.data.results]
    // console.log(AllPokemons)
    try{
        const URLPoke = AllPokemons.map(e => axios.get(e.url))
        
        let DataPoke =await Promise.all(URLPoke)
            .then(e=>{
                let pokemon = e.map(e => e.data)
                let arr = [];
                    pokemon.map(e=>{
                        arr.push({
                    name:e.name,
                    image:e.sprites.other.dream_world.front_default
                    })
            })
            return arr;
            
        })
        
        return res.json(DataPoke);
        
    }catch(e){
        next(e);
    }
    
})

// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

router.get("/:idPokemon", async (req, res, next) => {
    const idPokemon = req.params.idPokemon;
    let IsDB = false;
    try {
        if(idPokemon.length > 10 ){
            IsDB = true;
            let getAllDb = await Pokemon.findOne({
                where: {
                    id:idPokemon,
                }
            })

            return res.status(200).json(getAllDb);
        }else {
            let getOneApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data;

            let dataPoke = {
            image:getOneApi.sprites.other.dream_world.front_default,
            name: getOneApi.name,
            hp:getOneApi.stats[0].base_stat,
            attack:getOneApi.stats[1].base_stat,
            defense:getOneApi.stats[2].base_stat,
            speed:getOneApi.stats[5].base_stat,
            height:getOneApi.game_indices[0].height,
            weigth:getOneApi.weight

        }
   
        return res.status(201).json(dataPoke);
        }

        
    }catch (err){
        next(err);
    }
})

// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

router.get("/", async (req, res, next)=>{
    const {name} = req.query;
    try{
        const getNamePokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
        let poke = {
            image:getNamePokemon.sprites.other.dream_world.front_default,
            name: getNamePokemon.name,
            hp:getNamePokemon.stats[0].base_stat,
            attack:getNamePokemon.stats[1].base_stat,
            defense:getNamePokemon.stats[2].base_stat,
            speed:getNamePokemon.stats[5].base_stat,
            height:getNamePokemon.game_indices[0].height,
            weigth:getNamePokemon.weight
        }
        return res.status(201).json(poke);
    }catch(err){
        next(err);
    }
})

// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos

router.post("/pokemons", async (req,res,next)=>{
    const {name,hp,attack,defense,speed,height,weight} = req.body;
    try{
        let NewPoke = await Pokemon.create(
            {
                id:uuid(),
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
            })
        return res.status(201).json(NewPoke);
    }catch(err){
        next(err);
    }
})
module.exports = router;
