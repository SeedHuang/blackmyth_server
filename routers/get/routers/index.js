const { makeSuccessBody, makeFailedBody } = require('@tool');

module.exports = {
    '/get/routers': async function(ctx) {
        const routers  = [
            {
                pathName: 'home',
                showInMenu: true,
                text: '首页'
            },
            {
                pathName: 'editor',
                showInMenu: false,
                text: '编辑器'
            },
            {
                pathName: 'units',
                showInMenu: true,
                text: '单位列表'
            } 
        ];
        ctx.body = makeSuccessBody({data: {
            routers
        }});
    }
}