function valorPrimeiroBotao(){
    function valorPrimeiroBotao() {
        alert(document.querySelector
            ('input[type=button]').value);
    }
}
    
    const listaTeclas = document.querySelectorAll
    ('input[type=button]');
        ('input[type=button]');
    const display = document.querySelector('input[type=tel]');
    
    function valorBotaoUmJanela(){
    function valorBotaoUmJanela() {
        alert(listaTeclas[0].value);
    }
}   
    function valorBotaoUm(){
    function valorBotaoUm() {
        display.value += listaTeclas[0].value;
    }
}   
    function valorBotao(valor){
       display.value += listaTeclas[valor].value;
    function valorBotao(valor) {
        if (display.value.length < 8 && listaTeclas[valor].value !== '#') {
            display.value += listaTeclas[valor].value;
        } else {
            alert('Fora do limite permitido ou função não liberada.')
        }
    
    }
    
    
    }