const { openBlackmythConnection } = require('@connection');
const { makeSuccessBody, makeFailedBody } = require('@tool');
module.exports = {
    '/get/units': async function(ctx) {
        const connection = await openBlackmythConnection();
        try {
            const [rows] = await connection.execute('SELECT * FROM npcs LIMIT 100');
            ctx.body = makeSuccessBody({ data: { rows } });
            await connection.end();
        } catch (e) {
            ctx.body = makeFailedBody({'message': e.message});
        }
    }
}