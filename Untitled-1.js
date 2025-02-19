//Exercício1

let nome = "Melissa Pereira";
let idade = 20;
let aprovado = true;
let notas = [7, 6, 10];
let cadastro = {email: "melpscosta@gmail.com", senha: "Meli123"};

console.log(nome, idade, aprovado, notas[0], notas[1], notas[2], cadastro.email, cadastro.senha);

//O valor null é atribuído intencionalmente a uma variável para indicar que ela está vazia ou sem valor válido.
//O undefined aparece quando uma variável foi declarada, mas ainda não recebeu valor.

//Exercício2

let valorNulo = null;           
let valorIndefinido;            


if (valorNulo === null) {
    console.log("valorNulo é null");
} else if (valorNulo === undefined) {
    console.log("valorNulo é undefined");
} else {
    console.log("valorNulo tem um valor diferente de null e undefined");
}

if (valorIndefinido === null) {
    console.log("valorIndefinido é null");
} else if (valorIndefinido === undefined) {
    console.log("valorIndefinido é undefined");
} else {
    console.log("valorIndefinido tem um valor diferente de null e undefined");
}

//Estruturas de Controle 
//Exercício1
//1
let numero = 5

if (numero == 0) {
    console.log("o número é 0");
} else if (numero > 0) {
    console.log("o número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
}

//2
for (let i = 0; i < 11; i++) {
    console.log("Contador:", i);
}

//3
let num = 1;
let soma = 0;

while (num <= 5) {
    soma += num;
    num++;
}
console.log(soma);

//Exercício2
const prompt = require("prompt-sync")();
let opcao;

while (opcao !== "S") {

    console.log("Menu:");
    console.log("A. Opção A");
    console.log("B. Opção B");
    console.log("S. Sair");

    opcao = prompt("Digite a opção desejada (A, B ou S para sair):").toUpperCase();

    switch(opcao) {
        case "A":
            console.log("Você escolheu a opção A.");
            break;
        case "B":
            console.log("Você escolheu a opção B.");
            break;
        case "S":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}


