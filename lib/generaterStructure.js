var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));

function generateStructure(project){
    return fs.copySync('structure', project,{clobber: true});
}

module.exports = generateStructure;
