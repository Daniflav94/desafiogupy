let num = 3
let numeroexiste = false

function fibonacci (repeticoes) {
    let sequencia = [0,1];

    for (let i = 2; i < repeticoes; i++){
        let proxNumero = sequencia[i-1] + sequencia[i-2];
        sequencia.push(proxNumero) 
 
    }
    
    for (let cont = 0; cont < sequencia.length; cont++){
        if (num === sequencia[cont]){
            console.log("O número informado pertence a sequência Fibonacci: ", sequencia)
            numeroexiste = true;
        break
    }  
    }

    if(numeroexiste === false){
        console.log("O número informado não pertence a sequência Fibonacci: ", sequencia)
    }

    return sequencia
} 
    
fibonacci(20)



