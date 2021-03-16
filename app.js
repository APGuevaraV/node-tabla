
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors');

console.clear();
console.log(argv);


crearArchivo(argv.base,argv.l,argv.h)
                .then(resp=>console.log(resp.green))
                .catch(err=> console.log(err.red))



