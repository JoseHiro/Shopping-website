const { dirname } = require('path');
const path = require('path');

// console.log(__dirname);
module.exports = path.dirname(require.main.filename);
