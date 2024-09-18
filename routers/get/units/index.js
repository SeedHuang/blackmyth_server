
const { makeSuccessBody, simpleFetch } = require('@tool');



module.exports = {
    '/get/units': async function (ctx) {
        await simpleFetch(ctx, async (ctx) => {
            const [rows] = await ctx.connection.execute('SELECT * FROM npcs LIMIT 100');
            ctx.body = makeSuccessBody({ data: { rows } });
        });
    },
    '/get/unitById': async function (ctx) {
        await simpleFetch(ctx, async (ctx) => {
            const { id } = ctx.query
            const [rows] = await ctx.connection.execute('SELECT * FROM npcs WHERE id = ?', [ id ]);
            ctx.body = makeSuccessBody({ data: rows[0] });
        });
    }
}