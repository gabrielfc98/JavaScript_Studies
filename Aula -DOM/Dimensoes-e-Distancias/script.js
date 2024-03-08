// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll("img");
let larguraTotal = 0;
console.log(imgs);

imgs.forEach((item, index) => {
  const rect = item.getBoundingClientRect();
  console.log(`A imagem ${index + 1} tem um Width: ${rect.width}`);
  larguraTotal += rect.width;
  console.log(larguraTotal);
});

console.log(
  `A soma da largura de todas as imagens na página é de ${larguraTotal}`
);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
console.log(links);

links.forEach((item, index) => {
  const rect = item.getBoundingClientRect();
  const widthLink = rect.width;
  const heightLink = rect.height;

  if (widthLink >= 48 && heightLink >= 48) {
    console.log(
      `O ${
        index + 1
      } link possui as dimensões recomendadas. Width: ${widthLink} Height ${heightLink}`
    );
  } else {
    console.log(
      `O ${
        index + 1
      } link não possui as dimensões recomendadas. Width: ${widthLink} Height ${heightLink}`
    );
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");

if (window.innerWidth < 720) {
  menu.classList.add("mobile");
}
