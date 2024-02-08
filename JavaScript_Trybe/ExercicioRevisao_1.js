/*Nesse exercício, você precisa escrever um código que irá imprimir um quadrado feito totalmente de asteriscos com largura e altura determinadas pela variável n .
Para isso, você precisa usar for , percorrendo de 0 até n .*/

for (var index = 0; index < n; index++) {
  var linhaDeAsteriscos = '';

  for (var linha = 0; linha < n; linha++) {
    linhaDeAsteriscos = linhaDeAsteriscos + '*';
  }

  console.log(linhaDeAsteriscos);
}