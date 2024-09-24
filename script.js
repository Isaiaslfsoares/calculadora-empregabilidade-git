function inserir(valor) {
    const tela = document.formulario.tela;
    
     if (tela.value.length < 14) {
        
        if (isOperador(valor) && isOperador(tela.value[tela.value.length - 1])) {
            return;
        }

        tela.value += valor;
    }
}

function isOperador(char) {
    return ['+', '-', '*', '/'].includes(char);
}