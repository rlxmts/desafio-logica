let resultado = document.querySelector('#resultado label');
let listaDeNumerosSorteados = [];      
let numeroMinimo = document.querySelector('#de');
let numeroMaximo = document.querySelector('#ate');
let quantidade = document.querySelector('#quantidade');


function sortear(){         
    let de = numeroMinimo.value;
    let ate = numeroMaximo.value;    
    
    while(listaDeNumerosSorteados.length != quantidade.value){  
        let numeroSorteado = gerarNumero(de, ate);        
        if(!listaDeNumerosSorteados.includes(numeroSorteado)){
            listaDeNumerosSorteados.push(numeroSorteado);
        }
    }

    resultado.innerText = `Números sorteados: ${listaDeNumerosSorteados}`;    
    alterarBotao();
}

function reiniciar(){
    limparCampos(de);
    limparCampos(ate);
    limparCampos(quantidade);
    alterarBotao();
    resultado.innerText = `Números sorteados:  nenhum até agora`;
}

function limparCampos(elemento){
    elemento.value = '';
}

function alterarBotao(){
    const btReiniciar = document.querySelector('#btn-reiniciar');
    btReiniciar.className = btReiniciar.className === "container__botao-desabilitado" ? "container__botao" : "container__botao-desabilitado";
}

function gerarNumero(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}