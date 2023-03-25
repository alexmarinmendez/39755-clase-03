// const fs = require('fs')
import fs from 'fs'

const filename = './ejemplo.txt'

const operacionAsync = async() => {
    await fs.promises.writeFile(filename, 'Hola Mundo!')
    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    await fs.promises.appendFile(filename, 'Seguimos con Archivos')
    contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    await fs.promises.unlink(filename)
}

operacionAsync()
console.log('END')