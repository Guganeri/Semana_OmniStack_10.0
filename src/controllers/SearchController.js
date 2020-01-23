const Dev = require('../models/Dev');

module.exports = {
    async indexe(request, response)    {
        console.log(request.query);
        // Buscar todos os devs num raio 10km
        // Filtrar por tecnologias
        return response.json({devs: [] });

    }
}