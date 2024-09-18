const uploadImage = require('./uploadImage');
const unitInfo = require('./unit');


const exportObj = {
    ...uploadImage,
    ...unitInfo
};

module.exports = exportObj;