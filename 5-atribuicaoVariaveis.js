console.log("Trabalhando com atribuicao de variaveis");

const primeiroNome = "Fabiana"              
//let nome = "Fabiana";     let significa que uma variavel pode variar 
const sobrenome = "Monteiro";

console.log(primeiroNome, sobrenome);
//console.log(nome + " " + sobrenome); pode ser atribuido das duas formas, para juntar o nome e o sobrenome com espaco

console.log(`Meu nome e ${primeiroNome} ${sobrenome}`); // ${} e interpolado no meio de uma frase e para que seja atribuido deve-se usar duas crases

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando valor
idade = 33; //atribuindo valor
idade = idade+1; 
console.log(idade);
