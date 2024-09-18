
const { cates } = require('@symbols');
const path = require('path');
const fs = require('fs');
const { getPinyinString } = require('@tool');
const { openBlackmythConnection } = require('@connection');
const { makeSuccessBody, makeFailedBody, simpleFetch } = require('@tool');

module.exports = {
    '/write/addUnitInfo': async (ctx) => {
        const { title, breif, detail, cate, imageUrl } = ctx.request.body;
        if(cates[cate]) {
            await simpleFetch(ctx, async (ctx)=>{
                const id = getPinyinString(title);
                const tableName = 'npcs';
                const [rows, fields] = await ctx.connection.execute(
                    `INSERT INTO ${tableName} (id, title, breif, detail, cate, imageurl) VALUES ( ?, ?, ?, ?, ?, ?)`,
                    [id, title, breif, detail, cate, imageUrl]
                );
                ctx.body = makeSuccessBody({message: '添加成功', data: {id}})
            });
        } else {
            ctx.body = makeFailedBody({message: '没有对应的类别'});
        }
    },
    '/write/updateUnitInfo': async (ctx) => {
        const { id, title, breif, detail, cate, imageUrl } = ctx.request.body;
        if(cates[cate]) {
            await simpleFetch(ctx, async (ctx)=>{
                const tableName = 'npcs';
                const [rows, fields] = await ctx.connection.execute(
                    `UPDATE ${tableName} SET title = ?, breif = ?, detail = ?, cate = ?, imageurl = ? WHERE id = ?`,
                    [title, breif, detail, cate, imageUrl, id]
                );
                ctx.body = makeSuccessBody({message: '修改成功', data: {id}})
            });
        } else {
            ctx.body = makeFailedBody({message: '没有对应的类别'});
        }
    }
}
