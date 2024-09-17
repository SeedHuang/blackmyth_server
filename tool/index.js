const { pinyin } = require('pinyin');
const { openBlackmythConnection } = require('@connection');
const getPinyinString = (input) => {
    const result = pinyin(input, {
        style: pinyin.STYLE_NORMAL, // 设置为不带音调的拼音风格  
        heteronym: false, // 如果不需要处理多音字，可以设置为false  
    });
    const output = result.map((firstLevel) => {
        return firstLevel.join('');
    }).join('');
    return output;
};

const imageMimeTypes = [
    { type:'image/png' , suffix: 'png'},
    { type: 'image/jpeg', suffix: 'jpg'}
];

const makeSuccessBody = ({ code = 200, data, message = 'success'}) => {
    return {
        code,
        message,
        data : {
            ...data
        }
    }
};

const makeFailedBody = ( {code = 55555, message = 'Failed'}) => {
    return {
        code,
        message
    }
};

const simpleGet = async (ctx, funcBody) => {
    const connection = await openBlackmythConnection();
    ctx.connection = connection;
    try {
        await funcBody(ctx);
    } catch(e) {
        ctx.body = makeFailedBody({'message': e.message});
    } finally {
        await connection.end();
    }
};

module.exports = {
    getPinyinString,
    imageMimeTypes,
    makeSuccessBody,
    makeFailedBody,
    simpleGet
};