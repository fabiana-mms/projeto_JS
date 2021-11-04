console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;                CTRL + K + C - Inclui comentario o bloco selecionado
// const rioDeJaneiro = `Rio de Janeiro`;       CTRL + K + U - Tira o comentario do bloco selecionado

const listaDeDestinos =new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);     //new Array() - criando uma nova lista

listaDeDestinos.push(`Curitiba`);   //.push adiciona um novo item a lista
console.log("Destinos possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);    //.splice retira um item da lista iniciando do 0 que e a posicao, o segundo nro trata-se da quantidade
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
