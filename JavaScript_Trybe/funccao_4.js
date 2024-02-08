/*Este exercício, pede que você multiplique cada elemento do array numeros por 2 e retorne um novo array com os valores atualizados. Para isso siga os seguintes passos:
Criar uma variável resultados para armazenar os resultados das multiplicações;
Percorrer todos as posições do array numeros ;
Para cada posição, multiplicar o elemento por 2 e adicionar o resultado dessa multiplicação na variável resultados ;
Retornar a variável resultados quando terminarmos de percorrer todo o array.*/


var resultados = []

for(var index = 0; index < numeros.length; index++) {
  var elementoMultiplicadoPorDois = numeros[index] * 2
  resultados.push(elementoMultiplicadoPorDois)
}

return resultados;