const fs = require('fs'),
      colors = require('colors');

let listarTabla = (base, limite) => {
    for (let n = 1; n <= limite; n++) {
        console.log(`${base} * ${n} = ${base * n}`.blue);
    }
}

let crearArchivo = async (base, limite) => {
    if (! Number(base)) {
        throw new Error(`${base} no es un número`);
    }

    let rutaArchivo = `files/tabla-${base}`,
    datos = '';
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(rutaArchivo, datos, err => {
        if (err) throw err;
    });
    return rutaArchivo; 
};

// Exportar
module.exports = {
    crearArchivo,
    listarTabla
};