/*1. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. 
A seguir (utilizando apenas atribuições entre variáveis) 
troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.*/

let A = 10;
let B = 20;

let B1 = A + A;
let A1 = B - A;

console.log(`Valor armazenado em A: ${A1}`)
console.log(`Valor armazenado em B: ${B1}`)


/*2. Desenvolva um algoritmo para ler o número total de eleitores de um
município, 
o número de votos brancos, 
nulos e válidos. 
Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

let eleitores = 1000;
let nulo = 10;
let brancos = 30;
let validos = 200;


let percentualNulos =  nulo * 100 / eleitores // numero de votos dividido pelo numero de eleitores
let percentualBrancos = brancos * 100 / eleitores
let percentualValidos = validos * 100 / eleitores


let resultado = nulos + brancos + validos;
let resultado1 = (nulo + brancos) - eleitores;

console.log(`Total de eleitores do Municipio ${resultado}`);
console.log(`Numero de eleitores que votaram Nulo ${nulos}`);
console.log(`numero de eleitores que votaram em Branco ${brancos}`);

console.log(`Porcentagem de votos nulos${percentualNulos}`);
console.log(`Porcentagem de votos em Branco ${percentualBrancos}`);
console.log(`Percentual de votos validos ${percentualValidos}`)

/*3. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

//etapa 1
let custoFabrica = 5000.00;
let percentualDistribuidor = 28;
let percentualImposto = 45;

//etapa 2
let totalImpostos = percentualDistribuidor + percentualImposto;

let acrescimos = (custoFabrica * totalImpostos) / 100;

let custoFinal = custoFabrica + acrescimos;

//etapa 3
console.log(`Total Fábrica: R$${custoFabrica.toFixed(2)}`);
console.log(`Total de acréscimos: R$${acrescimos.toFixed(2)}`);
console.log(`Valor total de um carro novo para o consumidor é de R$${custoFinal.toFixed}`);

/*4. Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e 
mais 5% do valor das vendas por ele efetuadas. 
Escrever um algoritmo que leia o número de carros por ele vendidos, 
o valor total de suas vendas, 
o salário fixo e o valor que ele recebe por carro vendido. 
Calcule e escreva o salário final do
vendedor.*/



/* 5. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.*/



/*
 > (maior que)
 < (menor que)
 >= (maior ou igual que)
 <= (menor ou igual que)
 == (igual) -> só olha pro valor
 != (diferente) -> só olha pro valor
 === (estritamente igual - idêntico)  -> olha pro valor e para o tipo de dado
 !== (estritamente diferente - nada a ver)
*/

/*
-> estruturas condicionais - desvio de fluxos
 o numero atual é maior a 0?
    se sim 
		é positivo
		anotar o numero
	senão 
		é negativo
		descartar o numero
*/

/* 
if(numeroAtual > 0) {
    // SIM - aqui só executa se a resposta para a condição ou comparação for SIM/true
    // é positivo
} 
else {
    // NAO - aqui só executa se a resposta para a condição ou comparação for NAO/false
    // é negativo
} 
*/

/* // etapa 1
let primeiro = 10;
let segundo = 20;
// etapa 2 e 3
if(primeiro > segundo) {
    console.log(`O número ${primeiro} é o maior.`);
} else if(segundo > primeiro) {
    console.log(`O número ${segundo} é o maior.`);
} else {
    console.log(`Os numeros ${primeiro} e ${segundo} são iguais.`)
} */

// 100 > 100 -> nao
// 100 > 100 -> nao
// 100 === 100 -> sim

let quantidade = 5;
let valorCompra;

if(quantidade >= 12) {
    valorCompra = quantidade * 0.25;

} 
else {
    valorCompra = quantidade * 0.30;

}

console.log(`o valor da compra é R$${valorCompra}`);


/*
Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e 
imprima no terminal o nome e a quantidade de
letras que o nome possui, 
bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.
*/
/* 
// etapa 1
let nome = 'João';
let idade = 27;
let anoAtual = 2022;
// etapa 2
let quantidadeLetras = nome.length // capturar o tamanho da string = quantidade de caracters/espaços utilizados para armazenar esse dado
let anoNascimento = anoAtual - idade;
// etapa 3
console.log(`Nome: ${nome}, ${quantidadeLetras} letras`);
console.log(`Idade: ${idade}, nasceu em ${anoNascimento}`);
 */
/*
Crie um algoritmo que armazene um número inteiro positivo, 
e gere um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;
*/

// etapa 1
/* let numero = 10;
let resto = numero % 2; */

// 0 === PAR
// 1 === IMPAR


// 0 === !FALSE -> true -> PAR
// 1 === !TRUE -> false -> IMPAR
/* 
if(!resto){
    window.alert(`O número ${numero} é PAR!`);
    
} else {
   window.alert(`O número ${numero} é IMPAR!`);
} */


/*
10. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. 
se ela poderá ou não votar este ano
Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

// pode votar?

// sim
    // opcional ou obrigatório?

    // qualquer ( idade < 18) && (idade > 16) = 16 até 17 - opcional

    // 18 até 65 - obrigatório

    // maior que 65 - opcional


// nao



/*
  valorA = F
  valorB = F
  valorA || valorB = F
  só será false se ambas as condições forem false
*/

/*
  valorA = V
  valorB = V
  valorA && valorB = V
  só será verdadeiro se ambas as condições forem true
*/

/*
  valorA = F
  !valorA => V
  inverte o valor lógico
*/

// LÓGICOS - || (ou), && (e), ! (nao)

// etapa 1 

let anoNascimento = 2009;
let anoAtual = 2022;
let idade = anoAtual - anoNascimento;


if(idade >= 16) {
    // SIM, pode votar

    if(  ( idade >= 18 ) && ( idade <= 65)  ) {

        // 27 >= 18 ? V
        // 27 <= 65 ? V
        //  V
        console.log(`Já pode votar. Idade ${idade}`);
        console.log(`Voto é obrigatório`);
    } else {

        console.log(`Já pode votar. Idade ${idade}`);
        console.log(`Voto é opcional`);
    }

} else {
    console.log(`A idade é ${idade}, não pode votar. Menor de idade!`)
}


    // LOGICOS - || (ou), && (e) !(não);

    /* 
    valorA = v;
    valorB = v;
    valorA || valorB = v;

    se uma das condiÇões for false , continua verdadeira 
    so será false se as duas opçoes forem false
    */

    /* 
    valorA = v;
    valorB = F;
    valorA && valorB = F;

    so sera verdadeiro se as duas opçoes forem verdadeiras (true)
    */

    /* 
    valorA = v
    !valorA = F   (!=nao)
    inverte o valor lógico
   
    */

   Boolean so tem dois valores true ou false;