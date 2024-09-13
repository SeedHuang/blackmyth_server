const { pinyin } = require('pinyin');

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

module.exports = {
    getPinyinString,
    imageMimeTypes
};