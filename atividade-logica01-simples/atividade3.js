/*3. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

let custoFabrica = window.prompt('Informe o custo de fábrica do veículo: ');

if(custoFabrica !== null) {
  custoFabrica = Number(custoFabrica.replace('.', '').replace(',', '.'));
}

if(!custoFabrica) {

  document.write("Valor inválido");

} else {

  let percentualAcrescimo = 28 + 45;
  let valorAcrescimo = (custoFabrica * percentualAcrescimo) / 100;
  let custoFinal = custoFabrica + valorAcrescimo;

  document.write(`<p>Custo Fábrica: ${custoFabrica}</p>`);
  document.write(`<p>Custo Final: ${custoFinal}</p>`);

}