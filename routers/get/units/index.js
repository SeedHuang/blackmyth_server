
const { makeSuccessBody, simpleGet } = require('@tool');



module.exports = {
    '/get/units': async function (ctx) {
        await simpleGet(ctx, async (ctx) => {
            const [rows] = await ctx.connection.execute('SELECT * FROM npcs LIMIT 100');
            ctx.body = makeSuccessBody({ data: { rows } });
        });
    },
    '/get/unitById': async function (ctx) {
        console.log(ctx, '>>>>>>>')
        await simpleGet(ctx, async (ctx) => {
            const { id } = ctx.query
            console.log(id);
            const [rows] = await ctx.connection.execute('SELECT * FROM npcs WHERE id = ?', [ id ]);
            console.log(rows);
            ctx.body = makeSuccessBody({ data: rows[0] });
        });
    }
}