/* 
1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável.

*/



let idade = Number(window.prompt('Digite sua idade: '));

 if( !idade ) {
   document.write(`Idade inválida!`)
 } else {
  document.write(`"Minha idade é ${idade} anos"`)
 }
