
const { cates } = require('@symbols');
const path = require('path');
const fs = require('fs');
const { getPinyinString } = require('@tool');
const { openBlackmythConnection } = require('@connection');
const { makeSuccessBody, makeFailedBody } = require('@tool');


module.exports = {
    '/write/addUnitInfo': async (ctx) => {
        const { title, breif, detail, cate, imageUrl } = ctx.request.body;
        if(cates[cate]) {
            const id = getPinyinString(title);
            const tableName = 'npcs';
            try {
                const connect = await openBlackmythConnection();
                const [rows, fields] = await connect.execute(
                    `INSERT INTO ${tableName} (id, title, breif, detail, cate, imageurl) VALUES ( ?, ?, ?, ?, ?, ?)`,
                    [id, title, breif, detail, cate, imageUrl]
                );
                await connect.end(); // 不要忘记关闭连接  
                ctx.body = makeSuccessBody({message: '添加成功', data: {id}})
            } catch(error) {
                ctx.body = makeFailedBody({message: `添加单位失败：${error}`});
            }
        }
    },
    '/write/updateUnitInfo': async (ctx) => {

    }
}
