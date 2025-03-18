function sortear() {
    console.log("Função sortear foi chamada!");
    let quantidade =  parseInt(document.getElementById("quantidade").value); //O value aqui garante que o que o javascript está puxando é o valor inserindo no input e não a tag;
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    let lista = [];
    let numero;
    
    for(let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);

        while(lista.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);

        }
        
        lista.push(numero);
        alterarBotãoReiniciar();
        
    }

    function alterarBotãoReiniciar() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

    
    //para puxar um elemento que tenha classe similar a de outros, você coloca o elemento por inteiro, puxando o ID do elemento maior na hierarquia
    let numeroResultado = document.getElementById('resultado');
    numeroResultado.innerHTML = `<label class="texto__paragrafo">Números Sorteados: ${lista}
</label>`
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}