// if (se a condição for verdadeira)
const idade = 18;

if (idade >= 18) {
    console.log("Boas-vindas à área VIP!");
}

const idadeNova = 16;
if (idade >= 18) {
    console.log("Bem-vindo a area vip");
} else {
    console.log("Você vai para a área kids! ");

}

let idadeInformada = 15;

if (idadeInformada >= 18) {
    console.log("Boas vindas a area vip");
} else if (idadeInformada >= 13 && idadeInformada <= 17) {
    console.log("Você vai para área teen!");
} else {
    console.log("Você vai para area kids!");
}

// switch

let opcao = "pizza";

//const readline = require('readline');

//const rl = readline.createInterface({
    //input: process.stdin,
    //output: process.stdout
//})

//rl.question('o que você deseja hoje?(pizza,suhu,hambuguer suculento'):

switch (opcao) {
    case "pizza":
        console.log("pizza chegando!")
        break;
    case "sushi":
        console.log("sushi Fresquinho")
        break;
    case "Hamburguer suculento":
        console.log("Hamburguer suculento! ")
        break;
    default:
        console.log("Desculpa não temos essa opção no menu")
        break;

}
