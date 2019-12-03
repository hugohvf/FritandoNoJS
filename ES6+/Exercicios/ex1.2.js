const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
// 2.1
var idades = usuarios.map(item => item.idade);
console.log(idades);
// 2.2
var filtro = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade>18);
console.log(filtro);
// 2.3
var find = usuarios.find(item => item.empresa == "Google");
console.log(find);
// 2.4
// Minha resolução
//var idade2 = usuarios;
//idade2 = idade2.map(item=>({...item, idade: item.idade*2}));
//console.log(idade2.filter(item => item.idade < 50));
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);