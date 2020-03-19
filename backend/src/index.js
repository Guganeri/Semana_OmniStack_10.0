const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')

const app = express();


//tirar//
mongoose.connect('', {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);


//Tipos de parâmetros: 
//Query Params: req.query (Filtros, Ordenação , Paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)
