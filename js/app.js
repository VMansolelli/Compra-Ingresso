let quantidadeInferior;
let quantidadeSuperior;
let quantidadePista;
limparCampos();

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    if (isNaN(quantidadeIngresso) || quantidadeIngresso <= 0) {
        alert('Por favor, insira uma quantidade válida.');
    } else {
        if (tipoIngresso == '') {
            alert('Por favor, insira um tipo válido.');
        } else {
            calcularIngresso(tipoIngresso,quantidadeIngresso);
        }
    }
    
    
}

function calcularIngresso(tipo,qtd) {
    switch (tipo){
        case 'inferior':
            quantidadeInferior = document.getElementById('qtd-inferior').textContent;
            if (quantidadeInferior <= 0) {
                alert("Não é possivel mais comprar ingressos desse tipo");
            } else {
                if (quantidadeInferior < qtd) {
                    if(confirm(`Você só pode comprar ${quantidadeInferior}, deseje efetuar a compra?`)) {
                        quantidadeInferior = 0;
                        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
                    } 
                } else {
                    quantidadeInferior = quantidadeInferior - qtd;
                    document.getElementById('qtd-inferior').textContent = quantidadeInferior;
                }
            }
            limparCampos();
        break
        case 'superior':
            quantidadeSuperior = document.getElementById('qtd-superior').textContent;
            if (quantidadeSuperior <= 0) {
                alert("Não é possivel mais comprar ingressos desse tipo");
            } else {
                if (quantidadeSuperior < qtd) {
                    if(confirm(`Você só pode comprar ${quantidadeSuperior}, deseje efetuar a compra?`)) {
                        quantidadeSuperior = 0;
                        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
                    } 
                } else {
                    quantidadeSuperior = quantidadeSuperior - qtd;
                    document.getElementById('qtd-superior').textContent = quantidadeSuperior;
                }
            }
            limparCampos();
        break
        case 'pista':
            quantidadePista = document.getElementById('qtd-pista').textContent;
            if (quantidadePista <= 0) {
                alert("Não é possivel mais comprar ingressos desse tipo");
            } else {
                if (quantidadePista < qtd) {
                    if(confirm(`Você só pode comprar ${quantidadePista}, deseje efetuar a compra?`)) {
                        quantidadePista = 0;
                        document.getElementById('qtd-pista').textContent = quantidadePista;
                    } 
                } else {
                    quantidadePista = quantidadePista - qtd;
                    document.getElementById('qtd-pista').textContent = quantidadePista;
                }
            }
            limparCampos();
        break
    }
}

function limparCampos() {
    document.getElementById('tipo-ingresso').value = '';
    document.getElementById('qtd').value = '';
}
