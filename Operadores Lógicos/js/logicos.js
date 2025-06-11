let numero1 =50;
let numero2 = 80;
let resultado;

console.log(`Primeiro Número: ${numero1}`);
console.log(`Primeiro Número: ${numero2}`);

// Operador && =  tudo precisa ser TRUE para respostra TRUE
resultado = (numero1 < numero2) && (numero1 !== numero2);
console.log(resultado);

// Operador || = basta 1 ser TRUE para resposra TRUE
resultado = (numero1 > numero2) || (numero1 === numero2);
console.log(resultado);

// Operador ! = Negação da resposta 
resultado = !((numero1 > numero2) || (numero1 === numero2));
console.log(resultado);