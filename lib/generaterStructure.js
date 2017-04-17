var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));

var root = __dirname.replace(/zst-web\/lib/,'zst-web/');

function generateStructure(project){
    return fs.copySync(root + 'structure', project,{clobber: true});
}

module.exports = generateStructure;
