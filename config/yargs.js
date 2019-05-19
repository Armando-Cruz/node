const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multilplicar', opts)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}