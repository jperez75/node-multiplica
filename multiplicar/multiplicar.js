//requireds
//const fs = require('express');
//const fs = require('./ruta');

const fs = require('fs');
var colors = require('colors');


let creaArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor intorducido ${base} NO es un Número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`.blue);
        });

    });
};

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`El valor intorducido ${base} NO es un Número`);
        return;
    }
    console.log('============'.red);
    console.log(`la tabla base ${base}`.red);
    console.log('============'.red);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(`el valor de la tabla es /n`, data);
}

module.exports = {
    creaArchivo,
    listarTabla
}