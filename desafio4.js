const faturamento = [{"Estado": "SP", "Valor": 67836.43}, {"Estado":"RJ", "Valor": 36678.66}, {"Estado":"MG", "Valor": 29229.88}, {"Estado":"ES", "Valor": 27165.48}, {"Estado": "Outros", "Valor": 19849.53}]

let valorTotal = 0;
let percentual = 0;

for (let i = 0; i < faturamento.length; i++){
    valorTotal = valorTotal + faturamento[i].Valor;
}

for (let i = 0; i < faturamento.length; i++){
    percentual = (faturamento[i].Valor * 100) / valorTotal;
    console.log(`Percentual de representação do estado - ${faturamento[i].Estado} : ${percentual.toFixed(2)} % `)
}