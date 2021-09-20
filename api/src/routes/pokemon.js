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

    const DB_Pokemons = await Pokemon.findAll({
        include:{
            model:Type,
            atributes:["name"],
            through:{
                atributes:[]
            }
            
        },
    });



    try{
        const URLPoke = AllPokemons.map(e => axios.get(e.url))
        
        let DataPoke = await Promise.all(URLPoke)
        
            .then(e=>{
                let arr = [];
                
                let pokemon = e.map(e => e.data)
                
                    pokemon.map(e=>{
                        arr.push({
                            name:e.name,
                            id:e.id,
                            image:e.sprites.other.dream_world.front_default,
                            types1: [e.types[0].type.name,e.types[1]?.type.name].join(" "),
                            types:e.types[0].name,
                            hp:e.stats[0].base_stat,
                            attack:e.stats[1].base_stat,
                            defense:e.stats[2].base_stat,
                        })
                    })
                return arr;  
               
            }) 

        return res.status(200).json([...DB_Pokemons,...DataPoke]);     
    }catch(e){
        next(e);
    }
    
})

// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

router.get("/:idPokemon", async (req, res, next) => {
    const {idPokemon} = req.params;

    try {
        if(idPokemon.length > 10 ){

            let getAllDb = await Pokemon.findOne({
                where: {
                    id:idPokemon,
                },
                include:{
                    model:Type,
                    atributes: ["name"]
                }
            })

            return res.status(200).json(getAllDb);
        }else {
            let getOneApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data;

            let dataPoke = {
            id:getOneApi.id,
            image:getOneApi.sprites.other.dream_world.front_default,
            name: getOneApi.name,
            hp:getOneApi.stats[0].base_stat,
            attack:getOneApi.stats[1].base_stat,
            defense:getOneApi.stats[2].base_stat,
            speed:getOneApi.stats[5].base_stat,
            height:getOneApi.height,
            weight:getOneApi.weight,
            types1:[getOneApi.types[0].type.name,getOneApi.types[1]?.type.name].join(" "),
            
            

        }
   
        return res.status(200).json(dataPoke);
        }

        
    }catch (err){
        res.status(400).json(err);
    }
})

// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado


router.get("/", async (req, res, next)=>{
    const {name} = req.query;
    try{ 

        const PokeBD = await Pokemon.findOne(
            {where: {name:name}

        });

        if(PokeBD !== null){
            return res.status(200).json([PokeBD]);

        }else{

            let getNamePokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
            
            let poke = {
            image:getNamePokemon.sprites.other.dream_world.front_default,
            name: getNamePokemon.name,
            id:getNamePokemon.id,
            hp:getNamePokemon.stats[0].base_stat,
            attack:getNamePokemon.stats[1].base_stat,
            defense:getNamePokemon.stats[2].base_stat,
            types1: [getNamePokemon.types[0].type.name,getNamePokemon.types[1]?.type.name],
        }
        
        return res.status(200).json([poke]);   
        }
        
    }catch(err){
        next(err);
    }
})

// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos

router.post("/pokemons", async (req,res,next)=>{
    try {

        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

        const newPokemon = await Pokemon.create({
            
          name,
          image,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          types, 
        });
    
        const typeDB = await Type.findAll({
          where: { name: types },
        });
    
        res.send(await newPokemon.addType(typeDB)); 
      } catch (error) {
        next(error);
      }
    
})
module.exports = router;
