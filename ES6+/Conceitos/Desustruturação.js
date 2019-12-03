const usuario = {
    nome: 'Hugo',
    idade: 21,
    endereco: {
        cidade: 'Maringá',
        estado: 'PR',
    },
};

function mostraNome({ nome,idade }){
    console.log(nome, idade);
}

mostraNome(usuario);