const express = require('express');
const multer = require('multer')

const UploadConfig = require('./config/upload');
const UserController = require('./Controller/User');
const ModeloController = require('./Controller/Modelo');
const MarcaController = require('./Controller/Marca');
const VeiculoController = require('./Controller/Veiculo');
const EnderecoController = require('./Controller/Endereco');

const routes = express.Router();
const upload = multer(UploadConfig);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', upload.single('thumb'), UserController.store);
routes.put('/users/:id', upload.single('thumb'), UserController.update);
routes.delete('/users/:id',UserController.destroy);

routes.get('/modelos', ModeloController.index);
routes.get('/modelos/:id', ModeloController.show);
routes.post('/modelos', upload.single('thumb'), ModeloController.store);
routes.put('/modelos/:id', upload.single('thumb'), ModeloController.update);
routes.delete('/modelos/:id',ModeloController.destroy);

routes.get('/marcas', MarcaController.index);
routes.get('/marcas/:id', MarcaController.show);
routes.post('/marcas', upload.single('thumb'), MarcaController.store);
routes.put('/marcas/:id', upload.single('thumb'), MarcaController.update);
routes.delete('/marcas/:id',MarcaController.destroy);

routes.get('/veiculos', VeiculoController.index);
routes.get('/veiculos/:id', VeiculoController.show);
routes.post('/veiculos', upload.single('thumb'), VeiculoController.store);
routes.put('/veiculos/:id', upload.single('thumb'), VeiculoController.update);
routes.delete('/veiculos/:id',VeiculoController.destroy);

routes.get('/veiculos', VeiculoController.index);
routes.get('/veiculos/:id', VeiculoController.show);
routes.post('/veiculos', VeiculoController.store);
routes.put('/veiculos/:id', VeiculoController.update);
routes.delete('/veiculos/:id',VeiculoController.destroy);

routes.get('/endereco',       EnderecoController.index);
routes.get('/endereco/:id',   EnderecoController.show);
routes.post('/endereco',      EnderecoController.store);
routes.put('/endereco/:id',   EnderecoController.update);
routes.delete('/endereco/:id',EnderecoController.destroy);

module.exports = routes;