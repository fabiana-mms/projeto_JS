console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
// while(contador<3){
//     if(listaDeDestinos[contador] == destino) {
//     destinoExiste = true;
//     break;
//     }
//     contador += 1;
// }

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!!!");
}else{
    console.log("Desculpe, tivemos um erro.");
}

for(let cont = 0; contador < 3; cont ++){   // ( ; ; ), primeira condicao e para inicializar, segunda condicao e verificacao do loop e terceira condicao e execucao final do loop.
    if(listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    }
}

/* Para Debugar: Primeiro atribuir um breakpoint, executar e depurar, executar e depurar, inspecionar adicionando o nome da variavel, contornar ou opcao F10 que seguira etapa por
etapa ate finalizar todo o codigo. */ 