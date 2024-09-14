const uploadImage = require('./uploadImage');
const unitInfo = require('./unitInfo');


const exportObj = {
    ...uploadImage,
    ...unitInfo
};

module.exports = exportObj;