/*4. Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e 
mais 5% do valor das vendas por ele efetuadas. 
Escrever um algoritmo que leia o número de carros por ele vendidos, 
o valor total de suas vendas, 
o salário fixo e o valor que ele recebe por carro vendido. 
Calcule e escreva o salário final do
vendedor.*/

let salarioFixo = 2000.00;
let numeroCarrosVendidos = 20;
let valorTotalVendas = 300000;
let ExtraRecebidosCarros = 200;
let valorTotalPorCarro = ExtraRecebidosCarros*numeroCarrosVendidos;
let comissaoTotal = valorTotalVendas * (5/100);
let salarioFinal = salarioFixo + valorTotalPorCarro + comissaoTotal;

console.log(`Salario total: ${salarioFinal}`)