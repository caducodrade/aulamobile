const mongoose = require('mongoose');

const VeiculosSchema =  new mongoose.Schema({
    nome : String, 
    motor : String, 
    portas : String, 
    cor : String, 
    combustivel : String, 
    ano_fabricacao : Number, 
    ano_modelo : Number, 
    thumb: String,
    placa : String,
    marca_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Marca'
    },
    modelo_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Modelo'
    },
});

module.exports = mongoose.model('Veiculos', VeiculosSchema);