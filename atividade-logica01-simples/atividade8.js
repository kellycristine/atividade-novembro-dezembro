/*
8. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.
 */

let nome = prompt(`Informe seu nome: `);
let idade= Number(prompt`Informe sua idade: `);
let ano = Number(prompt`Informe o ano atual: `);

let quantidadeLetras =  nome.length;
let anoNascimento = ano - idade;

console.log(`Nome: ${nome}, ${quantidadeLetras} letras.`);
console.log(`Idade: ${idade} anos, nasceu em: ${anoNascimento}`);


