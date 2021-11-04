console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
// } else {
//     console.log("Nao e maior de idade e nao posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) { // duas barras || significa ou
    console.log("Boa Viagem!");
} else {
    console.log("Nao e maior de idade e nao posso vender");
}

console.log("Embarque: \n\n"); //\n pula uma linha
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Voce nao pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

//alt + shift + f para identar(arrumar) todo o codigo