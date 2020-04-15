const Marca = require('../Model/Marca')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let marcas = await Marca.find();
    return res.json(marca);
  },

  //show traz um registro onde o id do registro é igual ao id assado na url
  async show(req, res){
    
    let marca = await Marca.findOne({_id : req.params.id});
    return res.json(marca);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome;    
    const thumb = req.file.filename; 
    //busca se ja tem algum usuaro com esse email
    let marca = await Marca.findOne({nome});
    //compara se houve resultado
    if(!marca){
      //se nao houver resultado grava o novo usuario
      marca = await Marca.create({nome});
    }
    return res.json(marca);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let marca = await Marca.findOne({_id : req.params.id});
    //edito os registros
    user.nome = "ford";    
    user.thumb = req.file.filename;
    //atualiza os dados no banco
    marca = await User.update(marca);

    return res.json(marca);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let marca = await Marca.deleteOne({_id : req.params.id});
    return res.json(marca);
  }
};