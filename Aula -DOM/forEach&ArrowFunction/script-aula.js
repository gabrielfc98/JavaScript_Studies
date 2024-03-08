const imgs = document.querySelectorAll("img");

//argumento único pode ser usado sem as chaves ({})

imgs.forEach((item) => console.log(item));

//Argumetnos únicos também podem ser escritos sem parênteses

imgs.forEach((item) => {
  console.log(item);
});

// Multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// Funções vazias, sem argumentos, precisam de parênteses

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

const quadrado = (num) => num * num;
console.log(quadrado(4)); // Retorna 16. Não é necessário que a função criada tenha um return

const raizQuadrada = (num) => {
  const result = Math.sqrt(num);
  return result; // Mais de 1 linha de função! Deve ter return em seu escopo
};
console.log(raizQuadrada(16)); // Retorna 4, o uso de return é obrigatório, caso contrário retornará undefined
