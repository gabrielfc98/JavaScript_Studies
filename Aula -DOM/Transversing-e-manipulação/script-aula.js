const menu = document.querySelector(".menu");

menu.outerHTML; // Todo o elemento do HTML
menu.innerHTML; // HTML interno
menu.innerText; // texto puro, sem as tags

// menu.innerText = "<p> Oi, eu sou o Goku </P>"; // a tag vai como texto
// menu.innerHTML = "<p> Hello World </p>"; // a tag é renderizaada e adicionada

const lista = document.querySelector(".animals-list");
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

lista.parentElement; // elemento pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento diretamente acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos do elemento
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll("li"); // todas as li's do elemento
lista.querySelector("li:last-child"); // última li do elemento

console.log(lista.previousElementSibling);
console.log(lista.previousSibling);

const list = document.querySelector(".animals-list");
const contato = document.querySelector(".contact");
const titulo = contato.querySelector(".title"); // seleciona o título de contato

contato.appendChild(list); // Move lista para o final de contato. Adicona como último filho
contato.insertBefore(list, titulo); // insere a lista antes de titulo na área de contato
contato.removeChild(titulo); // remove o titulo de contato
contato.replaceChild(titulo, list); // substitui lista por titulo

const animais = document.querySelector(".animals");

const novoh1 = document.createElement("h1");
novoh1.innerText = "Novo título";
novoh1.classList.add("title");

animais.appendChild(novoh1);

const title = document.querySelector("h1");
const title2 = document.querySelector("h1");
const newTitle = title;
// title, title2  e novo título são iguais -> Não deve ser usado pois uma modificação em qaulquem um od itens causará mudanças em todos

const cloneTitle = title.cloneNode(true); // sinaliza para incluir os filhos
contato.appendChild(cloneTitle);
// Clona o elemento e o deixa independente do original

// Clonando a lista com foto dos animais e readicioando-a a área .animals
const cloneList = list.cloneNode(true);
const description = document.querySelector(".animals-description");
animais.insertBefore(cloneList, description);
