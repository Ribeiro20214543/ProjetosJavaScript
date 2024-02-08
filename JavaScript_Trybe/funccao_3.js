/* O objetivo deste exercício é escrever uma função que calcule o Índice de Massa Corpórea, o famoso IMC , baseado na altura e no peso recebidos como parâmetro. Para criar a função você precisa seguir dois passos: a declaração e a definição do corpo da função.
A declaração é o primeiro passo. Neste exercício, o nome da função deve ser calculaIMC e ela precisa receber dois parâmetros: altura e peso (necessariamente nessa ordem).*/

function calculaIMC(altura, peso) {
  var valorDoIMC = peso / (altura * altura);
  return valorDoIMC;
}