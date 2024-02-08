/*Para você resolver o exercício do laço for, primeiro você deve declarar a estrutura for , nos próximos parágrafos vou explicar em mais detalhes como funciona.
O for é composto pela sua declaração e seu corpo .
Declaração:
A declaração é dividida em três passos:
declarar a variável, que será o contador das nossas repetições , com seu estado inicial. No nosso caso, var index = 0 , pois queremos começar a percorrer o nosso array a partir da sua primeira posição;
definir a condição de execução do loop . Nesse exercício, o for continuará sendo executado enquanto o valor da variável index for menor que o valor do atributo length do array lista , logo a condição de execução é index < lista.length ;
por último, definir a condição de incremento , que é o passo que será executado sempre ao término de cada repetição do for . No nosso caso, essa condição será index++ , ou seja, vamos incrementar a variável index em 1 depois de cada execução, assim garantimos que vamos passar por todas as posições do array lista .*/

for(var index = 0; index < lista.length; index++) {
  console.log(lista[index]);
}