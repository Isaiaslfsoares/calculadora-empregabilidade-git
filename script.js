function inserir(valor) {
    const tela = document.formulario.tela;
    
     if (tela.value.length < 14) {
        
        if (isOperador(valor) && isOperador(tela.value[tela.value.length - 1])) {
            return;
        }

        tela.value += valor;
    }
}

function limparTela() {
    document.formulario.tela.value = '';
}

function deletar() {
    const tela = document.formulario.tela;
    tela.value = tela.value.slice(0, -1);
}

function isOperador(char) {
    return ['+', '-', '*', '/'].includes(char);
}