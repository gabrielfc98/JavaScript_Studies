var pessoa = {
  nome: "Gabriel",
  sobrenome: "Ferreira",
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
  idade: 25,
  possuiFaculdade: true,
  maiorIadde() {
    if (this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  },
};

pessoa.nome; //"Gabriel"
pessoa.possuiFaculdade; // true
var anoDeNasc = 2024 - pessoa.idade; // 1998
console.log(pessoa.nomeCompleto()); // Gabriel Ferreira
console.log(pessoa.maiorIadde());

var quadrado = {
  lados: 4,
  lado: 2,
  area: function () {
    return this.lado * this.lado;
  },
  perimetro: function () {
    return this.lados * this.lado;
  },
  perimetro2: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area());
console.log(quadrado.perimetro());
console.log(quadrado.perimetro2(8)); // Pega informação de fora do objeto para usar na função

Math.SQRT2; // Retorna a raiz quadrada de 2
Math.random(); // Gera um número aleatório
console.log("oi"); // Console é um objeto e Log uma função

var carro = {
  ano: 2014,
  cor: "vermelho",
  tipo: "ESportivo",
};

carro.motor = "1.0"; // Adicona um novo atrbiuto chamado motor ao objeto
carro.tipo = "Entrada"; // Modifica o atributo 'tipo'do objeto carro

console.log(carro);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var Gabriel = {
  nome: "Gabriel",
  sobrenome: "Ferreira de Castro",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  idade: 25,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(Gabriel.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  verHomem() {
    return "Latir";
  },
};

console.log(cachorro.verHomem());

var nome = "Gabriel";

nome.length; // 7
nome.charAt(0); // 'G' -> Retorna o caractere indicado entre as chaves
nome.replace("el", "ela"); // 'Gabriela

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // 2

var btn = document.querySelector(".btn"); // Seleciona o elemento com a classe Btn
btn.classList.add("color-w"); // Adiciona a classe .colow-w ao elemento do btn
btn.innerText; // "Fazer registro"
btn.addEventListener("click", () => {
  console.log("clicou");
});

// nomeie 3 propriedades ou métodos de strings
"frase".length; // Mede a quantidade de caracteres
"frase".toUpperCase(); // transforma em maísucla
"frase".concat("s"); // Concatena as duas strings formando a palavra frases

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector(".btn");

btn.addEventListener; // addEventListener
btn.innerHTML; // innerhhtml
btn.insertAdjacentElement(); // Adiciona uma elemento HTML
btn.animate; // Animates an element
btn.attachShadow; // Cria sombra para um elemento e a retorna

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
