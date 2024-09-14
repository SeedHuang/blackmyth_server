const Router = require('koa-router');
const postRouters = require('./post');
const getRouters = require('./get');

const router = new Router();
Object.keys(postRouters).forEach((key)=> {
    router.post(key, postRouters[key]);
});

Object.keys(getRouters).forEach((key)=> {    
    router.get(key, getRouters[key]);
});

module.exports = router;
