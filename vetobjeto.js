function funcao(){
    // cria o vetor
    var vet = []
    // Cria o objeto
    var objeto = {}
    // Cria os produtos
    for(var i=0;i<5;i++){
    objeto.codigo = Number (prompt("Informe codigo"))
    objeto.nome = Number (prompt("Informe nome"))
    objeto.qtde = Number (prompt("Informe qtde"))
    objeto.preco = Number (prompt("Informe preco"))
    vet.push(objeto)
    alert("Produto criado com sucesso")

    var estoque = 0
    for (var i=0;i<5;i++){
        estoque = estoque + vet[i].qtde
    }
    alert("Qtde em estoque " + esdtoque)
    }
}