const json = require('./dados.json');

let menor = json[0].valor;
let maior = 0;
let soma = 0;
let faturamentoSuperior = 0;
let media = 0;
let faturamentoZero = 0;

for (i = 0; i < json.length; i++) {
    if (json[i].valor < menor && json[i].valor != 0) {
        menor = json[i].valor;
    } else if (json[i].valor > maior) {
        maior = json[i].valor;
    }

    if (json[i].valor === 0) {
        faturamentoZero += 1;
    }
    soma += json[i].valor;
    media = soma / (json.length - faturamentoZero);

}

for (i = 0; i < json.length; i++) {
    if (json[i].valor > media) {
        faturamentoSuperior++;
    }
}

console.log("O menor valor de faturamento ocorrido em um dia do mês foi de ", menor);
console.log("O maior valor de faturamento ocorrido em um dia do mês foi de ", maior);
console.log("O valor de faturamento diário foi maior que a média", faturamentoSuperior, "vezes");


