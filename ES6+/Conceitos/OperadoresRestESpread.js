// REST

function soma(a, b,...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,3, 4, 4, 5, 6, 7));

// SPREAD

const usuario1 = {
    nome : 'Hugo',
    idade: 21,
    empresa: 'Hands',
};

const usuario2 = {...usuario1, nome: 'Joao' };

console.log(usuario2);