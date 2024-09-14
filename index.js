require('module-alias/register') 
const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
const static = require('koa-static');
const router = require('@routers');
const path = require('path');

const app = new koa();
app.use(bodyparser());
app.use(static(path.resolve('./upload')));
app.use(cors({
    origin: function(ctx) {
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTION'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, ()=>{
    console.log('blackmyth_server is listening on 4000');
});