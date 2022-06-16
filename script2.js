//criar um laço para exibir se o numero é impar ou par

let numero = 20;

for(contador = 0; contador <= numero; contador = contador +5)
{
    //modulo (mod) é o resto da divisão
    if (contador % 2 == 0){
        console.log (`${contador}é par`)
    }else{
        console.log (contador + "é impar") //variavel + texto = concatenação
    }
}
