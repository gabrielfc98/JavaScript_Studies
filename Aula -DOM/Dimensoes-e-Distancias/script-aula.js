const section = document.querySelector(".animals");

const rect = section.getBoundingClientRect();

rect.height; // altura do elemento
rect.width; // largura do elemento
rect.top; // distância entre o topo do elemetno e o scroll

console.log(rect.height, rect.width, rect.top, rect.y);

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

section.clientWidth; // width + padding
section.offsetWidth; // width + padding + border
section.scrollWidth; // width total, mesmo dentro de scroll

section.offsetTop; // Distância entre o topo do elemento e o topo da página
section.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página.

console.log(section.offsetTop);

window.innerWidth; // width da janela do usuário
window.outerWidth; // soma dev tools também
window.innerHeight; // Height da janela do usuário
window.outerHeight; // soma a barra de endereço

//window.pageYOffset; -> Retorna a altura de scroll Horizontal do usuário
//window.pageXOffset; -> Retorna a altura de scroll vertical do usuário

if (window.innerWidth >= 1000) {
  console.log("Tela Desktop");
} else if (window.innerWidth < 1000 && window.innerWidth >= 800) {
  console.log("Tela Tablet");
} else {
  console.log("Tela Mobile");
}

console.log(window.pageYOffset);

const small = window.matchMedia("(max-width:600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
