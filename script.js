function factorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para numeros negativos";
    }
    else if (numero === 0 && numero == 1 ) {
        return 1;

    } else {
        let resultado = 1;
        for ( let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;

        
    }

}

function calcular() {
    const numeroEntero = parseInt(document.getElementById('numeroEntero').value);
    const resultado = factorial(numeroEntero);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = "El factorial de " + numeroEntero + " es: " + resultado;
}