window.location.href; // Método para acessar o URL completo da página atual

const href = window.location.href;

// Essa informação pode ser uusada para obeter ou modificar a URL da página dentro do scrpit

function colorBg() {
  const body = document.body; // Armazena o elemento body em uma variável

  //   Verifica se a URL atual é igual a salva em "href"
  if (href === window.location.href) {
    body.style.background = "blue"; // Defini o BG do body como azul
  }
}

colorBg(); // Chamada a função

document.body; // Retorna o body da página

const titulo = document.querySelector("h1"); // Seleciona o primeiro h1 da página

titulo.innerText; // retorna o texto contido na tag
titulo.classList; // retorna as classes contidas na tag
titulo.id; // retorna os ids contidos na tag
titulo.offsetHeight; //retorna a altura do elemento
titulo.addEventListener("click", () => {
  alert("Clicou em título");
}); // ativa a função callback ao clicar no título

// Retorne o url da página atual utilizando o objeto window

window.location.href;

// Seleciona o primeiro elemento da página que
// possua a classe ativo

document.querySelector(".ativo");

// Retorne a linguagem do navegador
const idioma = navigator.language;

console.log(idioma);
// Retorne a largura da janela

window.innerWidth;
