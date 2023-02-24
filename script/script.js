let name = ['Mike', 'Nikola', 'Tom'];
console.log(name[1]);
name[1]='Alex';
console.log(name[1]);
name.splice(1,2);
console.log(name);
console.log(name.length);

const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];
let a2 = a.length;
let b2 = b.length;
if (a2 > b2) {
  console.log ('a > b');
} else if (a2 < b2) {
  console.log ('a < b');
}
 else {
  console.log ('a == b');
}

const phrase = 'I am learning JavaScript right now';
console.log(phrase.split(' '));
const a1 = [5, 3, 8, 5, 3, 2, 1, 2];
const b1 = [];
a1.forEach(function(el, i){
  if(b1.indexOf(el) === -1){
    b1.push(el);
  }
})
console.log(b1);
const users = [
  {id: 1, age: 17 },
  {id: 2, age: 18 },
  {id: 3, age: 19 },
  {id: 4, age: 21 },
  {id: 5, age: 17 },
  {id: 6, age: 20 },
  {id: 7, age: 25 }];

  let user = users.filter(user => user.age > 18 && user.age < 21)
  .map(user => {
    return user.id
  })
  console.log(user);