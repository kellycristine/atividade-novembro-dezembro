/*
3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"

*/


let totalCompra = prompt('Digite o total da compra: ')

if(totalCompra !== null) {
    totalCompra = Number(totalCompra.replace('.', '').replace(',', '.'))
}

if(!totalCompra) {
    document.write('Valor inválido');
} else {
    let quantiParc = prompt('Digite a quantidade de parcelas: ');

    if (quantiParc !== null) {
        quantiParc = parseInt(quantiParc.replace('.', '').replace(',', '.'))
    }

        if (!quantiParc) {
             document.write('Valor inválido')
        } else {
             let valorParc = totalCompra / quantiParc

            document.write(`O Valor total da compra foi ${totalCompra.toFixed(2)} `);
            document.write(` Forma de pagamento foi em ${quantiParc} vezes, cada parcela será no valor de R$${valorParc.toFixed(2)}`)
    }
}
