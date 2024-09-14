const { categories } = require('@symbols');
const { makeSuccessBody, makeFailedBody } = require('@tool');
module.exports = {
    '/get/categories': async function(ctx) {
        console.log(categories);
        ctx.body = makeSuccessBody({data: {
            categories
        }});
    }
}