//Vendor 
const express = require('express');
const multer = require('multer');

//Solicitação do nossos arquivos do MVC e config
const UploadConfig       = require('./config/upload');
const UserController     = require('./Controller/User');
const NotasController   = require('./Controller/Notas');
const EnderecoController = require('./Controller/Endereco');
const MateriaController    = require('./Controller/Materia');
const ProtocoloController    = require('./Controller/Protocolos');


const routes = express.Router();
const upload = multer(UploadConfig);

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello word");
});

routes.get('/users',          UserController.index);
routes.post('/users/login',   UserController.login);
routes.get('/users/:id',      UserController.show);
routes.post('/users',         upload.single('thumb'),UserController.store);
routes.put('/users/:id',      UserController.update);
routes.delete('/users/:id',   UserController.destroy);

routes.get('/notas',         NotasController.index);
routes.get('/notas/:id',     NotasController.show);
routes.post('/notas',        NotasController.store);
routes.put('/notas/:id',     NotasController.update);
routes.delete('/notas/:id',  NotasController.destroy);

routes.get('/materia',          MateriaController.index);
routes.get('/materia/:id',      MateriaController.show);
routes.post('/materia',         MateriaController.store);
routes.put('/materia/:id',      MateriaController.update);
routes.delete('/materia/:id',   MateriaController.destroy);


routes.get('/protocolo',        ProtocoloController.index);
routes.get('/protocolo/:id',    ProtocoloController.show);
routes.post('/protocolo',       ProtocoloController.store);
routes.put('/protocolo/:id',    ProtocoloController.update);
routes.delete('/protocolo/:id', ProtocoloController.destroy);

module.exports = routes;