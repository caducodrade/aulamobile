const Veiculo = require('../Model/Veiculo')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let veiculos = await Veiculo.find();
    return res.json(veiculos);
  },

  //show traz um registro onde o id do registro é igual ao id assado na url
  async show(req, res){
    //Busca um registro no banco
    let veiculo = await Veiculo.findOne({_id : req.params.id});
    return res.json(veiculo);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome; 
    const motor = req.body.motor;   
    const portas = req.body.portas;
    const cor = req.body.cor;
    const combustivel = req.body.combustivel;
    const ano_fabricacao = req.body.ano_fabricacao;
    const ano_modelo = req.body.ano_modelo;    
    const placa = req.body.placa;
    //const thumb = req.file.filename; 
    const marca_id = req.body.marca_id; 
    const modelo_id = req.body.modelo_id;
    
    let veiculo = await Veiculo.findOne({placa});
    
    if(!veiculo){
      //se nao houver resultado grava o novo usuario
      veiculo = await Veiculo.create({nome,motor,portas,cor,combustivel,ano_fabricacao,ano_modelo,placa,thumb,marca_id,modelo_id});
    }else{
      return res.status(400).json({error : "Veiculo já cadastrado!"});
    }
    return res.json(veiculo);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let veiculo = await Veiculo.findOne({_id : req.params.id});
    //edito os registros
    user.nome = req.body.nome;
    user.motor = req.body.motor;
    user.portas = req.body.portas;
    user.cor = req.body.cor ;
    user.combustivel = req.body.combustivel;
    user.ano_fabricacao = req.body.ano_fabricacao;
    user.ano_modelo = req.body.ano_modelo;
    user.placa = req.body.placa;
    //user.thumb = req.file.filename;
    //atualiza os dados no banco
    veiculo = await User.update(veiculo);

    return res.json(veiculo);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let veiculo = await Veiculo.deleteOne({_id : req.params.id});
    return res.json(veiculo);
  }
};