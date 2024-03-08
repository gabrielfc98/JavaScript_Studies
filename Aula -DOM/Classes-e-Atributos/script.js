// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

for (let i = 1; i < itensMenu.length; i++) {
  itensMenu[i].classList.remove("ativo");
}

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");

imagens.forEach((item, index) => {
  if (item.hasAttribute("alt")) {
    console.log(`A imagem ${index + 1} possui propriedade alt`);
  } else {
    console.log(`A imagem ${index + 1} não possui propriedade alt`);
  }
});

// Modifique o href do link externo no menu

const menu = document.querySelector(".menu");

const linkExterno = menu.querySelector('[href^="https://"]');

linkExterno.setAttribute("href", "https://www.pudim.com.br/");
