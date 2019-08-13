const argv = require('./config/yargs.js').argv;
var colors = require('colors');

const { listarTabla } = require('./multiplicar/multiplicar');
const { creaArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        creaArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

//console.log(module);
//console.log(multiplicar);
//console.log(process);

//console.log(process.argv);

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

//console.log(base);
console.log(argv.base);
console.log('limite:', argv.limite);

/*

*/