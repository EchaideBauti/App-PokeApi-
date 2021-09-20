const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false,
      
    },
    image: {
      type:DataTypes.STRING,
     
    },
    name: {
      type: DataTypes.STRING,
      
    },
    hp:{
      type: DataTypes.INTEGER
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    },
    createdDb:{
      type: DataTypes.BOOLEAN,
      defaultvalue: true
    }
   
    
  },{timestamps: false});
  
};


// Vida - hp
// Fuerza - attack
// Defensa - defense
// Velocidad - speed
// Altura - height
// Peso - weight