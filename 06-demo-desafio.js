import fs from 'fs'

const obj = {
    name: 'Alex',
    lastname: 'Marin',
    age: 45
}

// fs.writeFileSync('./demo_desafio.json', JSON.stringify(obj, null, '\t'))

let contenido = fs.readFileSync('./demo_desafio.json', 'utf-8')
contenido = JSON.parse(contenido)
contenido.age = 30

fs.writeFileSync('./demo_desafio.json', JSON.stringify(contenido, null, '\t'))
