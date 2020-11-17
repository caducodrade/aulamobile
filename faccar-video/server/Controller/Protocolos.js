const Protocolos = require('../Model/Protocolos');

module.exports = { 
    async index(req, res){
        let protoclos = await Protocolos.find();
        return res.json(protoclos);
    },
    
    async show(req, res){
        let protocolos = await Protocolos.findOne({ _id : req.params.id });
        return res.json( protocolos) ;
    },

    async store(req, res){
        let protocolos = await protocolos.create({            
            tipo : req.body.tipo,            
        });
        protocolos = await Protocolos.create({user_id, tipo});
        return res.status(200).json({sucess : "Protocolo cadastrado com sucesso"});
    },

    async update(req, res){        
        let protocolos = await Protocolos.findOne({_id : req.params.id});  
        protocolos.tipo = req.body.tipo;
        await Protocolos.updateOne({ _id : req.params.id }, protocolos).then(result => {
            return res.status(202).json({message : "Protocolo atualizado"})
        });
    
        return res.json(protocolos);
      },

    async destroy(req, res){
        await Protocolos.deleteOne({_id: req.params.id });
        return res.json({sucess : "Protocolo excluido com sucesso"});
    },
}