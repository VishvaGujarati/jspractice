/*const form = document.getElementById("form");
const name = document.getElementById("nm");
const pass = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted");
  console.log(name.value);
  console.log(pass.value);
});
*/

//=============localstorage========
/*const arr = ["vishva", "vatsal", "vaidehi"];
localStorage.setItem("name", JSON.stringify(arr));

console.log(JSON.parse(localStorage.getItem("name")));
let names;
if (localStorage.getItem("name")) {
  names = JSON.parse(localStorage.getItem("name"));
} else {
  names = [];
}
console.log(names);*/

//===========Timeout==============
/*
function showScore(name, score) {
  console.log(`hello ${name} , Your Score iS ${score}`);
}
const fsid = setTimeout(showScore, 1000, "vishva", 90);
console.log(fsid);
const sid = setTimeout(showScore, 1000, "peter", 90);
console.log(sid);

clearTimeout(fsid);*/

//========================DOMContentLoadeed==========
// const heading = document.querySelector("h1");
// console.log(heading);
// heading.style.color = "red";

//When the Script tag is inside the head tag it will be usefull
/*
window.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});
*/

//===============Scroll====================
/*
window.addEventListener("scroll", function () {
  console.log("hello");
  console.log(window.scrollX);
  console.log(window.scrollY);
});
console.log(window.innerHeight);
console.log(window.innerWidth);
*/

//===========getBoundingCloentRect()======

// const btn = document.querySelector("button");
// const box = document.querySelector(".box");
// btn.addEventListener("click", function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

//=======resize======
window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
