const campoQntDeNum = document.querySelector('#quantidade');
const campoNumMin = document.querySelector('#de');
const numeroMaximo = document.querySelector('#ate');
const resultado = document.querySelector('#resultado label');
let listaDeNumerosSorteados = [];

function gerarNumero(){
    return parseInt( Math.random() * numeroMaximo.value + 1)
}

function sortear(){

   while(listaDeNumerosSorteados.length != campoQntDeNum.value ){        
        let numeroSorteado = gerarNumero();       
        gerarNumero();
        if(numeroSorteado < campoNumMin.value || listaDeNumerosSorteados.includes(numeroSorteado)){
            gerarNumero();
        }else{
            listaDeNumerosSorteados.push(numeroSorteado);
            resultado.innerText = `Números sorteados: ${listaDeNumerosSorteados}`;
        }
   }    
    alterarBotao();
}

function reiniciar(){
    limparCampos(campoNumMin);
    limparCampos(numeroMaximo);
    limparCampos(campoQntDeNum);
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