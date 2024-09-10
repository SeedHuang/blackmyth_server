require('module-alias/register') 
const koa = require('koa');
const mount = require('koa-mount');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
const { getPinyinString } = require('@tool');
const fs = require('fs');
const { cates } = require('@symbols')

const app = new koa();
app.use(bodyparser());
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

app.use(mount('/write/unitInfo', (ctx) => {
    const { title, breif, detail, cate } = ctx.request.body;
    if(cates[cate]) {
        const id = getPinyinString(title);
        const path = `${__dirname}/database/${cate}/${id}`;
        const filePaths = [
            [
                title,
                `${path}/title.txt`,
            ],
            [
                breif,
                `${path}/breif.txt`,
            ],
            [
                detail,
                `${path}/detail.txt`
            ]
        ];
        console.log(fs.existsSync(path), '?????');
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path)
        }
        if(fs.existsSync(path)) {
            filePaths.forEach(([content, filePath]) => {
                fs.writeFileSync(filePath, Buffer.from(content, 'utf8'))
            })
        }
        
        
    }
    
    
    
}))

app.listen(4000, ()=>{
    console.log('blackmyth_server is listening on 4000');
});