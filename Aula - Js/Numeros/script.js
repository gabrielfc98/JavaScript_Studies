var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal ao invés de ,
var exp = 2e10; // 20000000000 (Exponencial → Adiciona 10 casas decimais)
var exp2 = 2e-2; // 0.02 -> Divide o primeiro número pela quantidade de decimais após o 'e'

console.log(exp, exp2);

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4; // 2*2*2*2 = 16
var modulo = 14 % 5; // Resto da divisão inteira -> 4

var soma = "100" + 50; // Não irá realizar a soma -> 10050
var subtracao = "100" - 50; // 50
var multiplicao = "100" * 2; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number) -> Não faz operações devido aos caracteres da string

var numero = 80;
var grandeza = "kg";
var peso = numero + grandeza; // '80kg'-> String
var calc = peso / 2; // NaN (Not a Number) -> Não irá fazer o cálculo

var total1 = 20 + 5 * 2; // 30 -> 20 + 10
var total2 = (20 + 5) * 2; // 50 -> 25 * 2
var total3 = (20 / 2) * 5; // 50 -> 10 * 5 (Segue a ordem de escrita, da esquerda para a direita)
var total4 = 10 + 10 * 2 + 20; // 40 -> 10 + 20 +10

var total5 = 5 + (2 * 4) / 4;

console.log(total5);

var x = 5;
console.log(x++); // 5 -> Retorna o valor inicial da variável antes do incremento
console.log(x); // 6 -> Retorna o novo valor da variável após o incremento

var y = 5;
console.log(++y); // 6 -> Ao mudar a posição do sinal para o início já retorna o novo valor da variável
console.log(y); // 6 -> Sem alterações pois já havia feito a adição anteriormente

var num = "25"; // Número declarado como uma string
var conversao = +num;
console.log(typeof conversao); // Aparecerá como number

var idade = "15";
+idade; // 15 (número)
-idade; // -15 (número)
console.log(+idade + 5); // 20 -> Sem o sinal de '+' não seria possível pois faria uma concatenação de strings + Número

var frase = "Hello World";
+frase; // NaN -> Nõa irá funcionar
-frase; // NaN -> Nõa irá funcionar

var possuiFaculdade = true;
console.log(+possuiFaculdade); // true = 1 e false = 0 (Converteu-se os valores em números)

var number = "5";
number = +number;
console.log(typeof number);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35

// Crie duas expressões que retornem NaN

var x = "s 10" / 2;
var y = +"Oi, eu sou o Goku";

console.log(x, y);

// Somar a string '200' com o número 50 e retornar 250

var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var num1 = 5;
num1++;
console.log(num1);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = `${numero / 2}kg`;
console.log(pesoPorDois);
