/*O primeiro exercício de strings, é solicitado que você atribua na variável resultado , que já está declarada, a concatenação das variáveis primeiraString e segundaString por ordem de tamanho. Significa que a menor das duas variáveis precisa ser a primeira parte da string final e caso as duas variáveis tenha o mesmo tamanho, tem que considerar a variável segundaString como a primeira parte da string final. Resultando nas seguintes regras:
se a variável primeiraString for maior ou igual a variável segundaString , a string final vai ser a concatenação da variável segundaString com a primeiraString ;
caso seja diferente, a string final vai ser a concatenação da variável primeiraString com segundaString .*/
if (primeiraString.length >= segundaString.length) {
  resultado = segundaString + primeiraString
} else {
  resultado = primeiraString + segundaString
}