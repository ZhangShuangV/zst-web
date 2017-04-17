#! /usr/bin/env node

/**
 * Created by zhangshuang on 2017/4/17.
 */
var command = require('commander');
var gs = require('../lib/generaterStructure');

command
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .parse(process.argv);

var dir = command.args[0];
if(!dir) command.help();

gs(dir);