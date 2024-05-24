// const person = {
//   name: "vishva",
//   age: 20,
//   status: "student",
// };

// const key = Object.keys(person);
// console.log(key);
// for (const property in person) {
//   console.log(`${property}:${person[property]}`);
// }

// const val = Object.values(person);
// console.log(val);

// const arr = Object.entries(person);
// console.log(arr);

// const res = arr.map((i) => {
//   const [k, v] = i; //key,value
//   console.log(k, v);
//   return k;
// });
// console.log(res);
// for (const [k, v] of arr) {
//   console.log(k, v);
// }

const products = [
  {
    title: "dinner",
    company: "ika",
  },
  {
    title: "lunch",
    company: "ika",
  },
  {
    title: "breakfast",
    company: "ika",
  },
  {
    title: "dinner",
    company: "ika",
  },
  {
    title: "lunch",
    company: "ika",
  },
];

const setarr = ["all", ...new Set(products.map((i) => i.title))];
console.log(setarr);

// const fname = "vishva";
// console.log(fname.includes("is", 1)); //true
// console.log(fname.includes("Is", 1)); //false
// const txt1 = "lu";
// const txt2 = "r";
// const filteredproducts = products.filter(
//   (products) =>
//     products.title.toLowerCase().includes(txt1) ||
//     products.title.toLowerCase().includes("r")
// );
// console.log(filteredproducts);

if (setarr.includes("dinner")) {
  console.log("yeah You are right");
}
