const fs = require('fs')

const filename = './ejemplo.txt'

fs.writeFile(filename, 'Hola Mundo', error => {
    if (error) return console.log('Hubo un error al escribir el archivo')
    console.log('Archivo escrito correctamente')
    fs.appendFile(filename, 'Hola de nuevo', error => {
        if (error) return console.log('Hubo un error al agregar datos al archivo')
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if (error) return console.log('Hubo un error al leer el archivo')
            console.log(contenido)
        })
    })
})

console.log('END')