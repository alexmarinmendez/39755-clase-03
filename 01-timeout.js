const temporizador = (cb) => {
    setTimeout(cb, 0)
}

const operacion = () => console.log('Ejecutando cualquier tarea...')

console.log('Inicio del proceso')
temporizador(operacion)
console.log('Fin del proceso')