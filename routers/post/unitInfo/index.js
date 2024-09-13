
const { cates } = require('@symbols');
const path = require('path');
const fs = require('fs');
const { getPinyinString } = require('@tool');

module.exports = {
    '/write/unitInfo': (ctx) => {
        const { title, breif, detail, cate } = ctx.request.body;
        if(cates[cate]) {
            const id = getPinyinString(title);
            const folderPath = path.resolve(`database/${cate}/${id}`);
            const filePaths = [
                [
                    title,
                    `${folderPath}/title.txt`,
                ],
                [
                    breif,
                    `${folderPath}/breif.txt`,
                ],
                [
                    detail,
                    `${folderPath}/detail.txt`
                ]
            ];
            if(!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath)
            }
            filePaths.forEach(([content, filePath]) => {
                fs.writeFileSync(filePath, Buffer.from(content, 'utf8'))
            })
        }
    }
}
