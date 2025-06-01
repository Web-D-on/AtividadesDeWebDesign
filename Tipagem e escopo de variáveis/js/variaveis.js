//criando variaveis
let nome = 'Clark Kent';
let email = 'clark@fiap.com.br';
let idade = 19;
let logado = true;

//exibindo no console
console.log(nome);
console.log(email);
console.log(idade, logado);

//exibindo o tipo
console.log(typeof nome);
console.log(typeof email);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof (nome), nome);

const DATA_NASCIMENTO = '09/11/2005';
console.log(DATA_NASCIMENTO);

let novoNome = 'Bruce Wayne';
console.log(novoNome, typeof novoNome);

novoNome = 'Logan';
console.log(novoNome);

console.log(poder);
var poder = 'voar'

//let é uma boa pratica e var não

//coerção implicita
console.log(typeof nome, nome);
console.log(typeof idade, idade);

nome = 1234
idade = false
console.log(typeof nome, nome);
console.log(typeof idade, idade);

//coerção explicita

var valorInicial = true;
console.log(valorInicial, typeof(valorInicial));

//conertendo para string
valorInicial = String(valorInicial);
console.log(valorInicial, typeof(valorInicial));
