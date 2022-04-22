//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6
var funcao = 3;
var fatorial = funcao;
for (var numero = 1; numero < funcao; numero++) {
    fatorial *= numero;
}
console.log(fatorial);