const number = 1;
let num2 = number;
num2 = 2;

console.log(number, num2); //primitive datatypes value to a variable changes made directly to that value,without affecting orginal value

const p1 = {
  name: "john",
  age: 20,
};

let p2 = { ...p1 }; //copy wiil be provided by ...
//non primitive datatype value to a variable is done by references that's why changes will affect all the references
/* 1.Use the spread (...) syntax
   2.Use the Object.assign() method
   3.Use the JSON.stringify() and JSON.parse() methods*/
p2.name = "bob";

console.log(p1, p2);
