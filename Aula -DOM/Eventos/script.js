// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    if (item.classList.contains("ativo")) {
      item.classList.remove("ativo");
    }
  });
  this.classList.add("ativo");
  console.log(this, this.classList);
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *"); // Seleciona todos os ementos depois de body

function mostraClique(event) {
  console.log(event.target);
}

todosElementos.forEach((Element) => {
  Element.addEventListener("click", mostraClique);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removeElement(event) {
  event.target.remove();
}

todosElementos.forEach((element) => {
  element.addEventListener("click", removeElement);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentaFonte(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", aumentaFonte);
