var idade = 45;

var idoso = idade >= 60 ? "É idoso" : "Não é idoso";

console.log(idoso); // Não é idoso

//condição ? true : false

var possuiDiabetes = true;

if (possuiDiabetes) console.log("Possui Diabetes");
else console.log("Não possui diabetes");

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;

console.log(darCredito);
