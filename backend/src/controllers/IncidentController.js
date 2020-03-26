const connection = require('../database/connection')

module.exports = {
    async index (request, response) {
        const { id } = request.params;
        const { page = 1 } = request.query;
        const limit = 5;
        var incidents = [];

        const [count] = await connection('incidents').count();

        if (id == undefined) {
            incidents = await connection('incidents')
                .select([
                    'incidents.*', 
                    'ongs.name', 
                    'ongs.email', 
                    'ongs.whatsapp', 
                    'ongs.city', 
                    'ongs.uf'])
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(limit)
                .offset((page - 1) * limit);
        } else {
            incidents = await connection('incidents')
                .select('*')
                .where('id', id);
        }
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        
        console.log(ong_id);

        const [id] = await connection('incidents').insert ({
            ong_id,
            title,
            description,
            value
        })
        return response.json({id})
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .select('ong_id')
            .where('id', id)
            .first();
        
        console.log(incident);

        if (incident.ong_id != ong_id) {
            return response.status(401).json({'error': 'Operation not permited!'});
        }   

        await connection('incidents')
            .delete()
            .where('id', id);

        return response.status(204).send();
    }
}