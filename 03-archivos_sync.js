const fs = require('fs')  //CommonJS
// import fs from 'fs' //ES Modules

const filename = './ejemplo.txt'

// fs.writeFileSync(filename, 'Hola Mundo desde el Backend!!!')

if (fs.existsSync(filename)) {
    let contenido = fs.readFileSync(filename, 'utf-8')
    console.log(contenido)
    fs.appendFileSync(filename, 'Nuevo Hola Mundo!')
    contenido = fs.readFileSync(filename, 'utf-8')
    console.log(contenido)
    fs.unlinkSync(filename) //borrar el archivo
} else {
    console.log('El archivo no existe')
}

console.log('END')