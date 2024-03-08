const menu = document.querySelector(".menu");

menu.className; // Retorna uma string com o nome da classe
menu.classList; // retorna uma lista de classes desse elemento
menu.classList.add("ativo"); // Adiciona classe Ativo ao elemento
menu.classList.add("ativo", "mobile"); // Adiciona as classes Ativo e Mobile ao elemento
menu.classList.remove("ativo"); // Remove a classe 'ativo' do elemento
menu.classList.toggle("ativo"); // Alterna estados da classe adicionando e removendo-a a depender de ação do usuário
menu.classList.contains("ativo"); // Retorna boolean true ou false
menu.classList.replace("ativo", "inativo"); // Troca uma classe por outra

console.log(menu.classList);
console.log(menu.classList.contains("oi"));

const animais = document.querySelector(".animals");

animais.attributes; // retorna todos os atributos em forma de lista
animais.attributes[0]; // retorna o primeiro atrbiuto

console.log(animais.attributes);

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Imagem 1"); // muda o atributo alt com o texto depois da vírgula
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt
img.hasAttributes(); // Função que verifica se possui algum atributo -> true / false

console.log(img.getAttribute("src"));
