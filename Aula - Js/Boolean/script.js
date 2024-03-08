var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui ensino superior completo");
}

// Retorna a codicional do else uma vez que a afirmação é falsa.

var opcao = "2";

switch (opcao) {
  case "1":
    console.log("Você escolheu a opção 1");
    break;

  case "2":
    console.log("Você escolheu a opção 2");
    break;

  default: // Caso a opção selecionada seja diferente de 1 ou 2
    console.log("A opção selecionado não é válida");
    break;
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeGabriel = 25;
var idadeCristiane = 59;

if (idadeGabriel > idadeCristiane) {
  console.log("É maior");
} else if (idadeGabriel < idadeCristiane) {
  console.log("É menor");
} else {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truphy
var idade = 28; // Truphy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var diferencaPopulacional = Math.abs(brasil - china);

if (brasil > china) {
  console.log(
    `O Brasil é mais populoso que a China tendo ${diferencaPopulacional} milhões de habitantes a mais`
  );
} else if (brasil < china) {
  console.log(
    `A china é mais populosa que o Brasil tendo ${diferencaPopulacional} milhões de habitantes a mais`
  );
} else {
  console.log("Os dois países tem a mesma população");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
