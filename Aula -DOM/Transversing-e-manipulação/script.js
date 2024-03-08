// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const newMenu = menu.cloneNode(true);
copy.appendChild(newMenu);

// Selecione o primeiro DT da dl de Faq

const dt = document.querySelector(".faq-list dt");

console.log(dt.innerText);

// Selecione o DD referente ao primeiro DT

const priremoDD = dt.nextElementSibling;

console.log(priremoDD.innerText);

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animals");

faq.innerHTML = animais.innerHTML;
