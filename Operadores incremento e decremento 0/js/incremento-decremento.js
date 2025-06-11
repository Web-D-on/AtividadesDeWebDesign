let primeiroNumero = 30;
let segundoNumero = 20;
console.log(primeiroNumero, segundoNumero);

// Adicionar 1 ao valor da variável = Incremento
primeiroNumero++;

// Subitrair 1 ao valor da variável = Decremento
segundoNumero--;
console.log(primeiroNumero, segundoNumero);
console.log(`----------------------`);
console.log(`Pós- fixada`);
primeiroNumero = 30;
segundoNumero = 20;
console.log(primeiroNumero, segundoNumero);

// Pós fixada
let resultado = primeiroNumero++ + segundoNumero++;
console.log(resultado);
console.log(primeiroNumero, segundoNumero);

console.log(`Pré- fixada`);
primeiroNumero = 30;
segundoNumero = 20;
console.log(primeiroNumero, segundoNumero);
resultado = ++primeiroNumero + ++segundoNumero;
console.log(resultado);
console.log(primeiroNumero, segundoNumero);
