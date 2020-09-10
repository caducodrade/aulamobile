
const mongoose = require('mongoose');
const UserSchema =  new mongoose.Schema({
    nome : String,
    email : String,
    senha : String,
    idade : Number,
    
    status : Boolean,
    thumb : String,
});

module.exports = mongoose.model('User', UserSchema);