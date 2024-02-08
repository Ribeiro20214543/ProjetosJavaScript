/*Aqui, você vai usar a estrutura condicional if/else para completar o código e atribuir na variável resultado , já declarada, uma string que descreva a geração dependendo do anoDeNascimento , também já declarado. As condições são as seguintes:
anoDeNascimento menor ou igual a 1945 = Geração silenciosa
anoDeNascimento maior que 1945 e anoDeNascimento menor ou igual a 1964 = Boomers
anoDeNascimento maior que 1964 e anoDeNascimento menor ou igual a 1980 = Geração X
anoDeNascimento maior que 1980 e anoDeNascimento menor ou igual a 1996 = Millennials
anoDeNascimento maior que 1996 = Geração Z*/
if (anoDeNascimento <= 1945) {
  resultado = "Geração silenciosa"
} else if (anoDeNascimento <= 1964) {
  resultado = "Boomers"
} else if (anoDeNascimento <= 1980) {
  resultado = "Geração X"
} else if (anoDeNascimento <= 1996) {
  resultado = "Millennials"
} else {
  resultado = "Geração Z"
}