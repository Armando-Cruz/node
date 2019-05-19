// Trabajando con archivos
const {crearArchivo, listarTabla} = require('./tablas'),
      argv = require('./config/yargs').argv,
      colors = require('colors');

let comando = argv._[0],
    base = argv.base,
    limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
    break;
    case 'crear':
        crearArchivo(base, limite)
        .then( rutaArchivo => console.log(`Archivo creado en la ruta ${rutaArchivo.blue}`))
        .catch(err => console.log(err));
    break;
    default:
        console.log('No se reconoce el comando');
}