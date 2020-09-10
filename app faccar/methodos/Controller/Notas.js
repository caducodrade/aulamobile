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
        await Notas.create({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            primeiroBim : req.body.primeiroBim,
            segundoBim : req.body.segundoBim,
            terceiroBim : req.body.terceiroBim,
            quartoBim : req.body.quartoBim
        });
        // await notas.populate('users').populate('materia').execPopulate();

        return res.status(200).json({success : "Notas cadastradas com sucesso"})
    },

    async update(req, res){        
        let notas = await Notas.findOne({_id : req.params.id});        
        notas.user_id = req.body.user_id;
        notas.materia_id = req.body.materia_id;
        notas.primeiroBim = req.body.primeiroBim;
        notas.segundoBim = req.body.segundoBim ;
        notas.terceiroBim = req.body.terceiroBim;
        notas.quartoBim = req.body.quartoBim;

        notas = await Notas.updateOne(notas);
        return res.json(notas);
      },

    async destroy(req, res){
        await Notas.deleteOne({_id: req.params.id });
        return res.json({sucess : "Notas excluidas com sucesso"});
    },
}