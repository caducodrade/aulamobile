const Notas = require('../Model/Notas');

module.exports = { 
    async index(req, res){
        let notas = await Notas.find();
        return res.json(notas);
    },
    
    async show(req, res){
        let notas = await Notas.findOne({ _id : req.params.id });
        return res.json( notas) ;
    },

    async store(req, res){
        let notas = await notas.create({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            primeiroBim : req.body.primeroBim,
            segundoBim : req.body.segundoBim,
            terceiroBim : req.body.terceiroBim,
            quartoBim : req.body.quartoBim,
        });
        notas = await Notas.create({user_id, materia_id, primeiroBim, segundoBim, terceiroBim, quartoBim});
        return res.status(200).json({sucess : "Notas cadastradas com sucesso"});
    },

    async update(req, res){        
        let notas = await Notas.findOne({_id : req.params.id});        
        notas.user_id = req.body.user_id;
        notas.materia_id = req.body.materia_id;
        notas.primeiroBim = req.body.primeiroBim;
        notas.segundoBim = req.body.segundoBim ;
        notas.terceiroBim = req.body.terceiroBim;
        notas.quartoBim = req.body.quartoBim;

        await Notas.updateOne({ _id : req.params.id }, notas).then(result => {
            return res.status(202).json({message : "Notas atualizadas"})
        });
    
        return res.json(notas);
      },

    async destroy(req, res){
        await Notas.deleteOne({_id: req.params.id });
        return res.json({sucess : "Notas excluidas com sucesso"});
    },
}