const mongoose = require('mongoose');

const protocolosSchema = new mongoose.Schema({      
    protoco: String,
});

module.exports = mongoose.model('protocolos', protocolosSchema);