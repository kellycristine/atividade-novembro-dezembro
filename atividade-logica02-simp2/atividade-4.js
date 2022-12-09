/*
4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda
coloque o total em segundos destes minutos armazenados na

primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"
*/


let minutos = Number(window.prompt('Digite quantos minutos: '));
let segundos = minutos * 60;


 if( !minutos ) {
   document.write(`Minutos inválidos!`)
 } else {
  document.write(`"${minutos} minutos equivale à ${segundos} segundos"`)
 }
