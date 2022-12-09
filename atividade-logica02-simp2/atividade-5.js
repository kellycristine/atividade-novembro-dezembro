/*
5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/

let nome = window.prompt(`Insira o nome do aluno:`);
if (!nome) {
    document.write(`Nome inválido`);
}
    let nota1 = Number(prompt(`Insira a primeira nota:`));
    
if (!nota1) {
    document.write(`Nota inválida`);
} else {
    let nota2 = Number(prompt(`Insira segunda nota:`));

    if (!nota2) {
        document.write(`Nota inválida`);
    } else {
        let nota3 = Number(prompt(`Insira terceira nota`));

        if (!nota3) {
            document.write(`Nota inválida`);
        } else {
            let somaNotas = nota1 + nota2 + nota3;
            let notaFinal = somaNotas / 3;
            document.write(`O aluno ${nome} ficou com a média ${notaFinal.toFixed(2)}.`);
        }
    }
}