function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Retorna aFusca -> Criado dentro do Escopo da função
// console.log(carro); -> Retorna um erro uma vez que a variável só existe dentro da função

if (true) {
  var carro = "Fusca";
  console.log(carro);
}

console.log(carro); // Retorna 'Fusca' -> Teoricamente, não deveria funcionar pois a variável só existe dentro do bloco

if (true) {
  let mes = "março";
  console.log(mes);
}

// console.log(mes); Retorna um erro pois a variável mes criada com let só irá existir dentro do bloco

if (false) {
  var car = "Ferrari";
  console.log(car);
}

console.log(car); // Retorna undefined, mas a variável foi criada ocupadando espaço na memória

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

const data = {
  dia: 13,
  mes: "março",
  ano: 1998,
};

// data.ano = 2002; // Altera o parâmetro ano do Objeto para 2002;
// data = "13/03/1998"; // Retorna um erro pois está tentando modificar o objeto

let ano;
ano = 2018;
ano++;
console.log(ano); // Retorna 2019

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  var marca = "Fiat";
  var portas = 4;
}
console.log(cor, marca, portas); // Variável com let e const não podem ser acessadas fora do bloco

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
