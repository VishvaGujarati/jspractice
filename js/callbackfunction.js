// function morning(name) {
//   return `Good Morning ${name.toUpperCase()}`;
// }

// function afternoon(name) {
//   return `Good Afternoon ${name.repeat(3).toUpperCase()}`;
// }

// function greet(name, cb) {
//   const myName = "john";
//   console.log(`${cb(name)} , My name Is ${myName}`);
// }

// greet("bob", morning); //callback methods
// greet("peter", afternoon);

// //forEach doesnot return new array

// const fruit = [
//   { name: "Orange", color: "Orange", quantity: 20 },
//   { name: "Mango", color: "Yellow", quantity: 12 },
//   { name: "Kiwi", color: "Green", quantity: 12 },
//   { name: "Banana", color: "Yellow", quantity: 50 },
//   { name: "dragonfruit", color: "pink", quantity: 5 },
// ];

// function showfruits(f) {
//   //   console.log(f);
//   console.log(f.color);
// }

// fruit.forEach(showfruits);

// //anonymous call back function

// fruit.forEach(function (item) {
//   console.log(item.name.toUpperCase());
//   console.log(item.quantity + 20);
// });

// console.log(fruit);
// //map returns a new array

// const color = fruit.map(function (i) {
//   //return i; //whole fruit array
//   // return "hello world";// returns the string for 3 times as it uses values from the original array

//   //   return i.quantity + 20;
//   return { name: i.name.toUpperCase(), quantity: i.quantity + 20 };
// });

// console.log(color);
// console.log(fruit);

// const fName = fruit.map(function (i) {
//   return `<h2>${i.name}</h2>`;
// });

// document.body.innerHTML = fName.join("");

// //filter

// const qFruit = fruit.filter(function (f) {
//   return f.quantity < 10;
// });

// console.log(qFruit);

// const cFruit = fruit.filter(function (f) {
//   return f.color.toLowerCase() == "yellow";
// });

// console.log(cFruit);

// const f = fruit.find(function (i) {
//   return i.quantity == 12;
// });

// console.log(f);

// console.log(
//   fruit.find(function (i) {
//     return i.name === "Kiwi";
//   })
// );

// const total = fruit.reduce(function (acc, curr) {
//   console.log(`total ${acc}`, `current ${curr.quantity}`);
//   acc += curr.quantity;
//   return acc; //compulsory
// }, 0);

// console.log(total);

const head1 = document.querySelectorAll("h1");
const res = document.getElementById("res");

const text = [...head1].map((i) => `${i.textContent}`).join(" ");

res.innerHTML = text;
