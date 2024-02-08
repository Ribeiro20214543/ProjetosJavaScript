/* Nesse exercício, você deve escrever um código que verifique se a palavra passada como primeiro parâmetro é um palíndromo ou não.
Antes de começarmos, é preciso entender que um palíndromo é uma palavra que você pode ler da esquerda para a direita e da direita para a esquerda e essa palavra continua tendo o mesmo significado, como por exemplo, as palavras a seguir são palíndromos:
ovo;
esse;
omissíssimo.
Para resolver o exercício, você precisa criar uma nova string invertendo a ordem das letras. Para isso vamos usar for , para navegar, de trás para frente, na palavra passada como primeiro parâmetro e criarmos a nova string invertida.*/

var palindromo = "";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
  return "SIM, SOU UM PALÍNDROMO"
} else {
  return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
}