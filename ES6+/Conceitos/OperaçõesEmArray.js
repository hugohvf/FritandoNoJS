var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item){
  return item % 3 === 0;
});

console.log(filter);

const find = arr.find(function(item){
  return item === 4; // Se for 2 ele não encontrará por exemplo e voltara um undefined
});

console.log(find);