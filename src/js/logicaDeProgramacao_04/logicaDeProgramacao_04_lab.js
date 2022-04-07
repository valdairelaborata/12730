var primeiroNumero = ''
var segundoNumero = ''
var operador = ''


function informarNumero(numero) {
    if (operador === '') {
        primeiroNumero = primeiroNumero + numero
        console.log('Primeiro número: ' + primeiroNumero)
    }
    else {
        segundoNumero = segundoNumero + numero
        console.log('Segundo número: ' + segundoNumero)
    }
}

function informarOperador(parametroOperador) {
    if (primeiroNumero !== '') {
        operador = parametroOperador
        console.log('Operador: ' + operador)
    }
}


function calcular() {

    var resultado = 0

    if (operador === '+') {
        resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero)
    }

    exibir(resultado)

}

function exibir(valor) {
    document.getElementById('display').innerHTML = valor
}