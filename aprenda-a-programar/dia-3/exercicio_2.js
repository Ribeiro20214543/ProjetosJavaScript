
let produtoA = {nome: "camiseta", valor: 100.00, internacional: true};
let produtoB = {nome: "perfume", valor: 200.00, internacional: true};
let produtoC = {nome: "sandália", valor: 120.00, internacional: false};

//Verificar se o produtoA é ou não é internacional
if (produtoA.internacional == true){
    //Se produto internacional aplicar 20% de imposto
    console.log("PRODUTO:-----", produtoA.nome,"------ VALOR TOTAL = ", produtoA.valor * 1.2);
}else{ 
    //Se não é um produto internacional aplicar 12% de imposto
    console.log("PRODUTO:-----", produtoA.nome,"------ VALOR TOTAL = ", produtoA.valor * 1.12);
}

//Verificar se o produtoB é ou não é internacional
if (produtoB.internacional == true){
    //Se produto internacional aplicar 20% de imposto
    console.log("PRODUTO:-----", produtoB.nome,"------ VALOR TOTAL = ", produtoB.valor * 1.2);
}else{ 
    //Se não é um produto internacional aplicar 12% de imposto
    console.log("PRODUTO:-----", produtoB.nome,"------ VALOR TOTAL = ",produtoB.valor * 1.12);
}

//Verificar se o produtoC é ou não é internacional
if (produtoC.internacional == true){
    //Se produto internacional aplicar 20% de imposto
    console.log("PRODUTO:-----", produtoC.nome,"------ VALOR TOTAL = ", produtoC.valor * 1.2);
}else{ 
    //Se não é um produto internacional aplicar 12% de imposto
    console.log("PRODUTO:-----", produtoC.nome,"------ VALOR TOTAL = ",produtoC.valor * 1.12);
}


