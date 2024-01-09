function comprar(){
    //let(variável) + tipo = documento.getElement (id correspondente no index!)
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);
    //quando precisamos de um número inteiro, como é o caso dos ingressos por quantidade, devemos colocar o parseInt para considerar estes números inteiros. 

    if(tipo.value =='pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'inferior'){
        comprarInferior (qtd);
    } else {
        comprarSuperior (qtd);
    }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert ('Quantidade indisponível para tipo pista');
        } else{
            qtdPista = qtdPista - qtd;
            document.getElementById ('qtd-pista').textContent = qtdPista; 
            alert ('Compra realizada com sucesso!');
        }    
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert ('Quantidade indisponível para tipo cadeira inferior');
        } else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById ('qtd-inferior').textContent = qtdInferior; 
            alert ('Compra realizada com sucesso!');
        }    
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert ('Quantidade indisponível para tipo cadeira superior');
        } else{
            qtdSuperior = qtdSuperior-qtd;
            document.getElementById ('qtd-superior').textContent = qtdSuperior; 
            alert ('Compra realizada com sucesso!');
        }    
}

