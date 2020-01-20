const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('');

// Entender que todos os formatos dos metodos http são em formato json. Poderia ser para algo mais espefico
// Como Get, Post Etc
app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros: 
//Query Params: req.query (Filtros, Ordenação , Paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message:'Hello OmniStack !!'});
});


app.listen(3333);