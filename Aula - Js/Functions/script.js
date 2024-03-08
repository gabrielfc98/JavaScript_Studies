function areaQuadrado(lado) {
  var area = lado * lado;
  return console.log(area);
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//num1 e num2 são os parâmetros de uma função
function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(4, 2)); // 4 e 2 são os argumentos da função

console.log(soma(4, 8));

function corFavorita(cor) {
  if (cor === "azul") {
    return console.log("Sua cor favorita é a dos mares");
  } else if (cor === "verde") {
    return console.log("Sua cor favorita é a das florestas");
  } else {
    return console.log("Você não gosta de nada");
  }
}

corFavorita("verde"); // A função precisa ser chamada para realizar seu papel
corFavorita(); // Não foram passados argumentos, logo retornará "Você não gosta de nada"

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("O Usuário clicou no botão");
});
console.log("O Usuário clicou no botão");

// A função possui dois argumento
// O primeiro argumaneto é a string 'click'
// o Segundo argumento é uma função anônima

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(84.5, 1.76); // Retorna o IMC
console.log(imc(84.5, 1.76)); // Retorna o IMC e undefined

function maiorDeIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
//  Retorna 2 tipos diferentes de dados: String e Boolean

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}
// console.log(totalPaises); // ERRO! A variável foi criada apenas dentro da função

var profissao = "Designer";

function dados() {
  var nome = "Henrique";
  var idade = 35;
  var testando = 50;
  function TodosOsDados() {
    var endereco = "São Paulo";
    var bairro = "Capão redondo";
    var testando = 100;
    return `${nome}, ${idade}, ${endereco}, ${profissao},${bairro} `;
  }
  return TodosOsDados();
}
console.log(dados()); // Retorna 'Henrique, 35, São Paulo, Designer e Capão Redondo'; Acessa todas as variáveis que sejam de fora da função
// console.log(TodosOsDados()); // Retorna um erro pois essa função está dentro de outros função, tornando-se visível apenas dentro da mesma

// Crie uma função para verificar se um valor é Truthy

function verificaBoolean(valor) {
  if (!!valor === true) {
    console.log("É Truthy");
  } else {
    console.log("É Falsy");
  }
}

verificaBoolean(0);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  let perimetro = lado * 4;
  return perimetro;
}

console.log(perimetroQuadrado(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  var nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

console.log(nomeCompleto("Mariana", "Gondin"));

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É ímpar");
  }
}
verificaPar(100);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(arg) {
  return console.log(typeof arg);
}

tipoDado("Oi");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Gabriel Ferreira");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
}
function jaVisitei(paisesVisitados) {
  return console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}
precisoVisitar(20);
jaVisitei(20);
