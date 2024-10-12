const cates = require('./cates');
const units = require('./units');
const routers = require('./routers');

module.exports = {
    ...cates,
    ...units,
    ...routers
};