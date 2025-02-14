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

//Exercício3
