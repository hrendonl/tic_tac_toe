const seleccionarTriki = (pos1, pos2, pos3) => {
    let boton1 = document.getElementById(pos1)
    let boton2 = document.getElementById(pos2)
    let boton3 = document.getElementById(pos3)
    boton1.classList.add('triki-show')
    boton2.classList.add('triki-show')
    boton3.classList.add('triki-show')
}

const verificarTriki = (marca, jugador) => {
    if ((tablero[0] == marca && tablero[1] == marca && tablero[2] == marca)) {
        trikiEstado = true
        seleccionarTriki(1, 2, 3)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    if ((tablero[0] == marca && tablero[3] == marca && tablero[6] == marca)) {
        trikiEstado = true
        seleccionarTriki(1, 4, 7)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    if ((tablero[0] == marca && tablero[4] == marca && tablero[8] == marca)) {
        trikiEstado = true
        seleccionarTriki(1, 5, 9)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    if (tablero[1] == marca  && tablero[4] == marca  && tablero[7] == marca){
        trikiEstado = true
        seleccionarTriki(2, 5, 8)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    if ((tablero[2] == marca  && tablero[5] == marca  && tablero[8] == marca )) {
        trikiEstado = true
        seleccionarTriki(3, 6, 9)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    if ((tablero[2] == marca  && tablero[4] == marca  && tablero[6] == marca)) {
        trikiEstado = true
        seleccionarTriki(3, 5, 7)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    }
    
    if (tablero[3] == marca  && tablero[4] == marca  && tablero[5] == marca) {
        trikiEstado = true
        seleccionarTriki(4, 5, 6)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"

    }
    if (tablero[6] == marca  && tablero[7] == marca  && tablero[8] == marca){
        trikiEstado = true
        seleccionarTriki(7, 8, 9)
        sonidoGanador()
        mensaje.innerHTML = jugador + " ha ganado"
    
    }
    
    if (tablero[0] != "" && tablero[1] != "" && tablero[2] != "" && tablero[3] != "" && tablero[4] != "" && tablero[5] != "" && tablero[6] != "" && tablero[7] != "" && tablero[8] != "" && trikiEstado == false){
        empateEstado = true
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "src/sounds/loser.mp3")
        etiquetaAudio.play()
        mensaje.innerHTML = "¡Ha habido empate!"            
    
    }

}

const sonidoBoton = () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "src/sounds/botton_sound.mp3")
    etiquetaAudio.play()
}

const sonidoGanador = () => {
    let etiqueta = document.createElement("audio")
    etiqueta.setAttribute("src", "src/sounds/winner.mp3")
    etiqueta.play()
}


const  marcar = (id) => {
    let idEntero = parseInt(id.id)
    if (contador % 2 != 0 && !trikiEstado) {
        let marca = marca1
        tablero[idEntero - 1] = marca
        id.innerHTML = marca
        sonidoBoton()
        verificarTriki(marca, jugador[0])
        let element = document.getElementById(id.id)
        element.setAttribute("disabled", "")
        element.classList.add('blue')
        // console.log(empateEstado)
        // console.log(trikiEstado)
    }
    else {
        if (!trikiEstado) {
            let marca = marca2
            tablero[idEntero - 1] = marca
            id.innerHTML = marca
            sonidoBoton()
            verificarTriki(marca, jugador[1])
            let element = document.getElementById(id.id)
            element.setAttribute("disabled", "")
            element.classList.add('red')
            // console.log(empateEstado)
            // console.log(trikiEstado)
        }
    }

    contador++

    if (contador % 2 != 0 && !trikiEstado && !empateEstado) {
        mensaje.innerHTML = "Turno " + jugador[0]
    }
    else {
        if (contador < 10 && !trikiEstado && !empateEstado) {
            mensaje.innerHTML = "Turno " + jugador[1]
        }
    }

   
}

const mostrar = () => {
    let player1 = document.getElementById('player1')
    let player2 = document.getElementById('player2')
    jugador[0] = player1.value
    jugador[1] = player2.value
    let mensaje = document.getElementById('mensaje')
    mensaje.innerHTML = "Turno " + jugador[0]
    let element = document.getElementById('show')
    element.classList.add('show')
    let form = document.getElementById('form')
    form.classList.add('ocult')
}

let tablero = ["", "", "", "", "", "", "", "", ""]
let jugador = ["", ""]
let contador = 1
let marca1 = "X"
let marca2 = "O"
let trikiEstado = false
let empateEstado = false
