/*
2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável
*/

let x = window.prompt(`Digite o valor de X: `);

    if(x !== null) {
        x = Number(x.replace('.', '').replace(',', '.'))
    }

        if(!x) {
            document.write(`Número inválido`);
        } else {    
            let y = window.prompt(`Digite o valor de Y: `);

            if(y !== null) {
                y = Number(y.replace('.', '').replace(',', '.')) 
              }
         
                if(!y) {
                  document.write(`Número inválido`);
                } else {    
                    let z = x + y;
                    document.write(`O resultado da soma de ${x} e ${y} é ${z}.`);
     }
 }
