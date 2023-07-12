const USD = "USD";
const EUR = "EUR";
const BRL = "BRL";
const ARS = "ARS";
const UYU = "UYU";

function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
        case "*":
            return numeroUno * numeroDos;
        case "/":
            return numeroUno / numeroDos;    
    }
}

let monto = prompt("Ingrese el monto a convertir.");
while(isNaN(monto)) {
    console.log(monto, "No es un numero");
    monto = Number(prompt("Ingresa un numero"));
}


console.log(monto);

let divisa1 = prompt("Cual es la divisa a convertir? (UYU, USD, EUR, ARS o BRL)").toUpperCase();

console.log(divisa1);

let divisa2 = prompt("Cual es la divisa deseada? (UYU, USD, EUR, ARS o BRL)").toUpperCase();

console.log(divisa2);

if (divisa1===divisa2) {
    console.warn("Elige dos divisas distintas")
}

if (divisa1===UYU) {
if (divisa2===USD) {
    console.log(monto + "UYU son: " + parseInt(calculadora(monto, 38, "/")) + "USD")
}else if (divisa2===EUR) {
    console.log(monto + "UYU son: " + parseInt(calculadora(monto, 42, "/")) + "EUR")
}else if (divisa2===BRL) {
    console.log(monto + "UYU son: " + parseInt(calculadora(monto, 8, "/")) + "BRL")
}else if (divisa2===ARS) {
    console.log(monto + "UYU son: " + parseInt(calculadora(monto, 7, "*")) + "ARS")
}
}else if (divisa1===USD) {
    if (divisa2===UYU) {
        console.log(monto + "USD son: " + parseInt(calculadora(monto, 38, "*")) + "UYU")
    }else if(divisa2===EUR) {
        console.log(monto + "USD son: " + parseInt(calculadora(monto, 1.10, "/")) + "EUR")
    }else if(divisa2===ARS) {
        console.log(monto + "USD son: " + parseInt(calculadora(monto, 263, "*")) + "ARS")
    }else if(divisa2===BRL) {
        console.log(monto + "USD son: " + parseInt(calculadora(monto, 5, "*")) + "BRL")
    }
}else if (divisa1===EUR) {
    if (divisa2===USD) {
        console.log(monto + "EUR son: " + parseInt(calculadora(monto, 1.10, "*")) + "USD")
    }else  if(divisa2===UYU) {
        console.log(monto + "EUR son: " + parseInt(calculadora(monto, 42, "*")) + "UYU")
    }else if(divisa2===ARS) {
        console.log(monto + "EUR son: " + parseInt(calculadora(monto, 290, "*")) + "ARS")
    }else if(divisa2===BRL) {
        console.log(monto + "EUR son: " + parseInt(calculadora(monto, 5.34, "*")) + "BRL")
    }
}else if (divisa1===ARS) {
    if (divisa2===USD) {
        console.log(monto + "ARS son: " + parseInt(calculadora(monto, 0.0038, "*")) + "USD")
    }else if(divisa2===UYU) {
        console.log(monto + "ARS son: " + parseInt(calculadora(monto, 0.15, "*")) + "UYU")
    }else if(divisa2===EUR) {
        console.log(monto + "ARS son: " + parseInt(calculadora(monto, 0.0035, "*")) + "EUR")
    }else if(divisa2===BRL) {
        console.log(monto + "ARS son: " + parseInt(calculadora(monto, 0.018, "*")) + "BRL")
    }
}else if (divisa1===BRL) {
    if (divisa2===USD) {
        console.log(monto + "BRL son: " + parseInt(calculadora(monto, 0.21, "*")) + "USD")
    }else if(divisa2===UYU) {
        console.log(monto + "BRL son: " + parseInt(calculadora(monto, 8, "*")) + "UYU")
    }else if(divisa2===EUR) {
        console.log(monto + "BRL son: " + parseInt(calculadora(monto, 0.19, "*")) + "EUR")
    }else if(divisa2===ARS) {
        console.log(monto + "BRL son: " + parseInt(calculadora(monto,54, "*")) + "ARS")
    }
}

console.warn("Los montos pueden no ser exactos, el valor final será redondeado.")