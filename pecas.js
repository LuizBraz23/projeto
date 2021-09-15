const listaPecas = ['Peca de teste', 'AB', 'Peca B']

console.log('quantidade de peças')

    if (listaPecas.length <= 10) {
        console.log('as peças podem ser cadastradas');
    }

    console.log('quantidade de caracteres')

    for (let index = 0; index < listaPecas.length; index++) {
        const pecaAtual = listaPecas[index];
        if (pecaAtual.length <3) {
            console.log(pecaAtual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
        } else {
            console.log(pecaAtual + ': a peça pode ser cadastrada.')
        }
    
    }

    console.log('Peso da Peça')

    const pesoPecaGramas = 50;
        if (pesoPecaGramas >= 100) {
            console.log('Peso Suficiente.')
        } else {
            console.log('Valor insuficiente.')
        }