let a = 0
let b = 0

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function VerificarPar(a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}


console.log(somar(1, 2) + " soma\n")
console.log(subtrair(1, 2) + " subtrair\n")
console.log(multiplicar(1, 2) + " multiplicar\n")
console.log(dividir(1, 2) + " dividir\n")
console.log("É par: "+VerificarPar(1) + "\n")

    
