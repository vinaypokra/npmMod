const  chalk = require('chalk');
const validator = require('validator');

//console.log(chalk.green.bold.inverse("hello world"));

const res = validator.isEmail("vvinayppokra@gmail.com");
console.log(res ? chalk.greenBright.inverse(res) : chalk.red.inverse(res) );
  