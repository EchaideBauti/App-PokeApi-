const { Router } = require('express');
// Importar todos los routers;
const axios = require('axios')
const {Type} = require('../db')
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

//GET https://pokeapi.co/api/v2/type

router.get("/", async (req,res,next)=>{
    const DB_Type = await Type.findAll();
    // console.log(DB_Type);
    if(DB_Type.length === 0){
        try{
            const GetType =  await axios.get("https://pokeapi.co/api/v2/type");
            //  console.log(GetType);
            for(let i = 0; i < GetType.data.results.length; i++){
                await Type.create({name:GetType.data.results[i].name})
            }
          
            return DB_Type;
        }catch(err){
        next(err);
        } 
    }else{
        return res.status(200).json(DB_Type)
    }
    
})


module.exports = router;
