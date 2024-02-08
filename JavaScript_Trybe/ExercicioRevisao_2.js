/* Nesse exercício, você deve escrever um código que navegue até a variável n e devolva um array com todos os números primos que você encontrar entre 0 e n .
Antes de começarmos, é preciso entender que um número primo é um número que só é divisível pelo número 1 e por ele mesmo. Isso significa que, se tentarmos dividir esse número com qualquer outro número menor que ele mesmo, o resto dessas divisões nunca vai ser igual a zero.*/

var numerosPrimos = [2, 3];

for (var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
  var quantidadeDeDivisores = 0;

  for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
    if (numeroAtual % numeroMenor == 0) {
      quantidadeDeDivisores ++;
    }
  }

  if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
  }
}

return numerosPrimos;