const uploadImage = require('./uploadImage');
const unitInfo = require('./unitInfo');

module.exports = {
    ...uploadImage,
    ...unitInfo
}