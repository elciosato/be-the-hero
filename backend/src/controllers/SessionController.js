const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { ong_id } = request.body;
        console.log(ong_id);
        const ong = await connection('ongs')
            .select('name')
            .where('id', ong_id)
            .first();
        if (!ong) {
            return response.status(404).json({'error': 'No ONG found with this ID'});
        }
        return response.json(ong);
    }
}