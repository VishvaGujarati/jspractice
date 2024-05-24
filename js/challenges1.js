// 1st

var firstname, last_name;
firstname = "abc";
last_name = "xyz";

//const firstname = "abc";
//const last_name="xyz";
var address = "main Street";
address = "First Street";

document.write(firstname, " ", last_name, " ", address);

console.log(firstname, last_name, address);

//2nd

var street, country;
street = "first street";
country = "India";

var fullmailingAddress = street + "  " + country;

console.log("Fll Email Is" + fullmailingAddress);
const name = "it's me";
console.log(name);

//3d

const score1 = 20;
const score2 = 30;
const score3 = 100;

const total = score1 + score2 + score3;
const avg = total / 3;

console.log(avg, total);

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;

var message = "There are (" + remainingPlates + ") plates available";

console.log(message);

//4th

const fruits = ["apple", "orange", "kiwi", 123];
// fruits[fruits.length - 1] = 123;
console.log("Last Item of Fruit Arrray is ", fruits[fruits.length - 1]);

const _1stfruit = fruits[0];
fruits[fruits.length - 1] = "pineapple";
console.log(fruits[0], fruits);

//5th

const calculatetotal = function (subtotal, tax) {
  return subtotal + tax;
};

console.log(calculatetotal(20, 80));

var order1, order2, order3;

order1 = calculatetotal(100, 20);
order2 = calculatetotal(200, 30);
order3 = calculatetotal(40, 50);
console.log(order1, order2, order3);

//6th

const car = {
  make: "hello",
  model: 12,
  year: 2024,
  color: ["red", "yellow", "pink"],
  hybrid: true,
  drive() {
    console.log("It Is Driving");
  },
  stop: function () {
    console.log("it's  stop function");
  },
};

console.log(car.color[0]);
car.drive();
car.stop();

//7th

const person1 = {
  name: "john",
  age: 20,
  status: "resident",
};
const person2 = {
  name: "bob",
  age: 12,
  status: "torist",
};

if (person1.age > 18 && person1.status == "resident") {
  console.log(person1.name, "You Are Eligible");
} else {
  console.log(person1.name, "You Are Not Eligible");
}
if (person2.age > 18 && person2.status == "resident") {
  console.log(person2.name, "You Are Eligible");
} else {
  console.log(person2.name, "You Are Not Eligible");
}

//8th

function fullName({ fName, lName }) {
  // return (fName + lName).toUpperCase();
  return `${fName} ${lName}`.toUpperCase();
}

// console.log(fullName("vishva", "gujarati"));
console.log(fullName({ lName: "vishva", fName: "gujarati" }));
