// const add = function (n1, n2) {
//   return n1 + n2;
// };

// const value = add(5, 5);
// // console.log(value);

// const mutiply = (n1, n2) => n1 * n2;
// // console.log(mutiply(5, 5));
// //arrow functions

// const sayhi = () => console.log("hello");
// sayhi();

// const double = (value) => value * 2;
// console.log(double(10));

// const args = (val1, val2) => {
//   const res = val1 * val2;
//   return res;
// };
// const sum = args(8, 9);
// console.log(sum);

// const obj = () => ({
//   name: "john",
//   age: 20,
// });
// const person = obj();
// console.log(person);

const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => document.write("you clicked me"));
btn.addEventListener("click", function () {
  setTimeout(() => {
    this.style.color = "red";
  }, 2000);
  // btn.style.color = "red";
});
