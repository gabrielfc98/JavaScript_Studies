var jogadoresFlamengo = ["Gabigol", "Bruno Henrique", "Arrascaeta"];

//Acessando os valores contidos dentro da String

jogadoresFlamengo[0]; // Retorna o primeiro Elemento -> Gabigol
jogadoresFlamengo[2]; // Retonra o último elemento -> Arrascaeta

var gabigol = ["Flamengo", 27, 1.78, "Gabriel Barbosa"];

gabigol[0]; // Retorna Flamengo
gabigol[1]; // Retorna 27
gabigol[2]; // Retorna 1.78
gabigol[4]; // Retorna Gabriel Barbosa

var videoGames = ["Switch", "PS5", "Xbox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("Gamboy Color"); // Adiciona ao final da array
videoGames.push("Steam Deck");
videoGames.length; // 3

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

var comidas = ["pizza", "pipoca", "coxinha", "churrasco"];

for (let i = 0; i < comidas.length; i++) {
  console.log(comidas[i]);
  if (comidas[i] === "pipoca") {
    break;
    //Para todo o loop quando a string pipoca (comidas[1] for encontrada)
  }
}

var cidades = ["Brasília", "Rio de Janeiro", "Salvador", "Ilhéus"];

cidades.forEach(function (item, index, array) {
  console.log(`${item} é o ${index + 1}° item da array ${array}`);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var titulosCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

titulosCopa.forEach(function (item) {
  console.log(`O Brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas.slice(-1);

console.log(ultimaFruta);
frutas.forEach(function (item) {
  console.log(item);
});

console.log(`Minha fruta favorita é a ${ultimaFruta}`);
