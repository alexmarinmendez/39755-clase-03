const temporizador = () => {
    let counter = 1
    console.log('Iniciando temporizador....')
    const timer = setInterval(() => {
        console.log(counter++)
        if (counter > 5) {
            clearInterval(timer)
        }
    }, 2000)
}

const operacion = () => console.log('Ejecutando cualquier tarea...')

console.log('Inicio del proceso')
temporizador()
console.log('Fin del proceso')