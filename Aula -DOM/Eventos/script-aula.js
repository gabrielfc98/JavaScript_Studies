const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animals-list");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path; // Caminho até a tag HTML ond o eventeo aconteceu
  console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener("click", executarCallback);

const linkExterno = document.querySelector('.menu a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

console.log(linkExterno);

const image = document.querySelector("img");

function callback(event) {
  console.log(this); // retorna a imagem selecionada
  console.log(this.getAttribute("src")); // Retorna o src da imagem
}

image.addEventListener("click", callback);

const h1 = document.querySelector("h1");

function retorno(event) {
  console.log(event.type, event);
}
h1.addEventListener("click", retorno);
h1.addEventListener("mouseenter", retorno);
window.addEventListener("scroll", retorno);
window.addEventListener("resize", retorno);
window.addEventListener("keydown", retorno);

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.style.background = "#1D2B53"; // Muda BG para azul ao clicar na tecla A
  } else if (event.key === "v") {
    document.body.style.background = "#FF004D"; // Muda BG para vermelho ao clicar na tecla V
  }
}

window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((item) => {
  item.addEventListener("click", imgSrc);
});
