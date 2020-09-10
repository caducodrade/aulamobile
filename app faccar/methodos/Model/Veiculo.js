const mongoose = require('mongoose');

const VeiculosSchema =  new mongoose.Schema({    
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    materia_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Materia'
    },
    
});

module.exports = mongoose.model('Veiculos', VeiculosSchema);