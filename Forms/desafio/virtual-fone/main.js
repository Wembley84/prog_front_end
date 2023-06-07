const listaTeclas = document.querySelectorAll('input[type=button]');
const display =  document.querySelector('input[type=tel]');

// function valorBotaoUmJanela (){ // mostra o valor do primeiro botão
//     valorBotaoUm(listaTeclas[0].value);
// }
// function valorBotaoUm(){

//     display.value = display.value + listaTeclas[0].value;
// }
// listaTeclas[0].onclick = valorBotaoUm; // chama a função quando clicado

function valorBotao(valor){
    display.value = display.value + listaTeclas[valor] .value
    display.value = display.value + listaTeclas[valor].value;
}

function limpaDisplay(){
    display.value = '' // coloca o valor do display como nulo
    display.value = '' // coloca o valor do display como vazio
}

listaTeclas[0].onclick = function(){
    valorBotao(11);
} 
// let i = 0;
// while (i < listaTeclas.length){
//     const tecla = listaTeclas[i];
//     const indice = i
//     tecla.onclick = function(){
//         valorBotao(indice);     
//     }
//     i++;
// }

for (let i = 0; i < listaTeclas.length; i++){
        const tecla = listaTeclas[i];
        tecla.onclick = function(){
        valorBotao(i);     
    }
}