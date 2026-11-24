//object literals
const objetoPessoa = {
    nome:"joão",
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);

//removendo uma propriedade de um objeto

delete objetoPessoa.idade;
console.log(objetoPessoa);

//adicionando uma propriedade ao objeto
objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);

//mutação
objetoPessoa.sobrenome = "Santana Costa";
console.log(objetoPessoa);

//método assign

const objeto1 = {
    nome: "Maria", 
    idade: 22,
};

const objeto2 = {
    altura: 165,
    genro: "feminino",
};

const objetoDestino = {};

Object.assign(objetoDestino, objeto1,objeto2);
console.log(objetoDestino);

//metodo keys

const chaves = Object.keys(objetoDestino);
console.log(chaves);