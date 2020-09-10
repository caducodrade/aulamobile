const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }, 
    materia_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Materia"
    },
    primeiroBim : Number,
    segundoBim : Number,
    terceiroBim : Number,
    quartoBim : Number
});

module.exports = mongoose.model('notas', notasSchema);