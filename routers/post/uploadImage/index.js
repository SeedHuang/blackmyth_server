const multer = require('koa-multer');
const path = require('path');
const fs = require('fs');
const { imageMimeTypes, makeSuccessBody, makeFailedBody } = require('@tool');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const imagesPath = path.resolve('upload/images');
        if(!fs.existsSync(imagesPath)) {
            fs.mkdirSync(imagesPath, { recursive: true });
        }
        cb(null, imagesPath)
    },
    filename: (req, file, cb) => {
        const findMimeType = imageMimeTypes.find((mimeType) => {
            if(mimeType.type === file.mimetype) {
                return true;
            }
        })
        cb(null, `${file.fieldname}-${Date.now()}.${findMimeType.suffix}`)
    }
});

const upload = multer({ storage });

module.exports =  {
    '/write/uploadimage': async (ctx) => {
        try {
            await upload.single('image')(ctx);
            const { filename } = ctx.req.file;
            ctx.body = makeSuccessBody({message: '上传成功', data: {filename: `//localhost:4000/upload/images/${filename}`}})
        } catch (e) {
            ctx.body = makeFailedBody({message: `上传失败:${e}`})
        }
    }
};