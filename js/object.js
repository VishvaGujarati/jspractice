// let age = 90;

// let random = "random-value";
// random = "age"; //must be a property name
// const person = {
//   name: "vishva",
//   age: 20,
//   siblings: ["vaidehi", "jash"],
//   "random-value": "random",
//   parents: {
//     father: {
//       //   name: "bharatbhai",
//       age: 50,
//     },
//     mother: {
//       //   name: "Dharmisthaben",
//       age: 47,
//     },
//   },
//   fullName: function () {
//     // console.log(this);
//     console.log(`my name is ${this.name}`);
//   },
// };
// console.log(person.name);
// console.log(person.parents["father"]["name"]);
// console.log(person.age);
// console.log(person.parents.father.age);
// console.log(person[random]);
// console.log(person["random-value"]);
// person.fullName();

//===============constructor function===============
/*
function Person(fname, laname) {
  this.fname = fname;
  this.laname = laname;
  this.fullname = function () {
    console.log(`my name is ${this.fname} ${this.laname}`);
    console.log(this);
  };
}
const john = new Person("john", "anderson");
console.log(john);
john.fullname();
console.log(this);

//===============factory function===============

function createPerson(fname, lname) {
  return {
    fname,
    lname,
    fullName: function () {
      console.log(`my name is ${this.fname} ${this.lname}`);
    },
  };
}
const bob = createPerson("john", "andreson");
bob.fullName();
console.log(bob);*/

//===============prototypal inheritance============
/*
function account(name, init) {
  this.name = name;
  this.bal = init;
  //===============property lookup===============
  //   this.bank = "chase";
  //   console.log(`My name is ${this.name} and my initial balance is ${this.bal}`);
}

const john = new account("john", 200);
const bob = new account("bob", 0);

account.prototype.bank = "sbi";
account.prototype.deposit = function (amt) {
  this.bal += amt;
  console.log(`${this.name} ,your balance is ${this.bal}`);
};

// console.log(john.bank);
// console.log(bob.bank);
// john.deposit(300);
// bob.deposit(200);
*/

//===============es6 classes===============
/*
class Account {
  constructor(name, init) {
    this.name = name;
    this.bal = init;
  }
  bank = "sbi";

  deposit(amount) {
    this.bal += amount;
    console.log(`${this.name} ,your balance is ${this.bal}`);
  }
}

const john = new Account("john", 0);
console.log(john);
john.deposit(200);
console.log(john.bank);

const bob = new Account("bob", 200);
console.log(bob);
bob.deposit(500);
console.log(bob.bank);*/

//==========call==============
/*
const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`hello ,i'm ${this.name} and I'm ${this.age} years old`);
  },
};
const susan = {
  name: "susan",
  age: 21,
};
function greet() {
  console.log(this);
  console.log(`hello ,i'm ${this.name} and I'm ${this.age} years old`);
}
greet.call(john);
greet.call(susan);
greet.call({ name: "peter", age: 30 });
john.greet.call(susan);
*/

//====================apply================
/*
const john = {
  name: "john",
  age: 24,
};
const susan = {
  name: "susan",
  age: 21,
};
function greet(city, country) {
  console.log(this);
  console.log(
    `hello ,i'm ${this.name} and I'm ${this.age} years old and I lived in ${city} ${country}`
  );
}
greet.call(john, "melbourne", "Aus");
// greet.call(susan);
// greet.call({ name: "peter", age: 30 });

greet.apply(john, ["melbourne", "Australia"]);
// greet.apply(susan);
// greet.apply({ name: "peter", age: 30 });

///================bind======================
const peter = greet.bind(susan, "coblenz", "germany");
peter();

*/

// const counter = {
//   count: 0,
//   increment() {
//     console.log(this);
//     this.count++;
//     console.log(this.count);
//   },
// };

// const btn = document.querySelector(".increment");
// btn.addEventListener("click", counter.increment.bind(counter)); //if you want to remove the event listener it will loose the reference to the bind

// const increment = counter.increment.bind(counter);
// btn.removeEventListener("click", increment);

const person = {
  name: "vishva",
  age: 20,
  siblings: ["vaidehi", "jash"],
  "random-value": "random",
  parents: {
    father: {
      //   name: "bharatbhai",
      age: 50,
    },
    mother: {
      //   name: "Dharmisthaben",
      age: 47,
    },
  },
  fullName: function () {
    // console.log(this);
    console.log(`my name is ${this.name}`);
  },
};

for (const propertyName in person) {
  console.log(`${propertyName}:${person[propertyName]}`);
}
