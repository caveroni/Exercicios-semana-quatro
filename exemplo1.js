//a) Números de 1 a 50

for(let numero = 1; numero <= 50; numero++){
    console.log(numero)
}

//b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop 

for(let numero2 = 1; numero2 <= 50; numero2++){
    console.log(numero2)

    if (numero2 === 25){
        break
    }
}

//c) números de 1 a 50, quando chegar no número 10 pule a instrução|

for(let numero2 = 1; numero2 <= 50; numero2++){

    if (numero2 === 10){
        console.log("Pulando isntrução")
        continue
    }
    console.log("numero " + numero2)
}