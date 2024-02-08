/*O exercício de Arrays pede que você complete a função atribuindo o valor do primeiro elemento do array lista que é passado para a função, e caso não tenha mais de um elemento nesse array, você deve atribuir na variável com o texto "array vazio" e por fim retornar esse valor.*/
function retornaPrimeiroElemento(lista) {
  var resultado;

  if (lista.length > 0) {
    resultado = lista[0];
  } else {
    resultado = "array vazio";
  }

  return resultado;
}