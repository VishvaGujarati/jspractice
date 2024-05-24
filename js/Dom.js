/*cnsole.log(window);
console.dir(document); // console. dir() is the way to see all the properties of a specified JavaScript object in the console*/

//=======================Query Selector==========================
/*
const l2 = document.querySelectorAll("li");
l2.forEach(function (a) {
  a.style.color = "blue";
});

const l1 = document.querySelector("li:last-child");
l1.style.color = "red";
console.log(l1);

const l3 = document.querySelector("#d1");
l3.style.backgroundColor = "lightyellow";
console.log(l3);

const l4 = document.querySelectorAll(".l1");
l4.forEach(function (l4) {
  l4.style.color = "yellow";
});
console.log(l4);

const result = document.querySelector("ol");
const allchild = result.childNodes;
console.log(allchild);

console.log(result.parentElement.parentElement.style.backgroundColor);

const sib = document.querySelector("li");
console.log(sib.nextSibling.previousSibling);
console.log(sib.nextElementSibling);

const sib1 = document.querySelector("li");

console.log(sib1.textContent);
console.log(sib1.firstChild.nodeValue);
*/

//===========================textContent==========
/*var link = document.querySelector("a");
link.nextElementSibling.setAttribute("id", "div2");
document.getElementById("div2").textContent = "Hey It's 2nd Div Tag";

link.nextElementSibling.style.color = "red";*/

//=======================className,classList============
/*
document.querySelector("div").className = "division";
document.querySelector("div").className = "text";
//override

document.querySelector("div").classList.add("division");
document.querySelector("div").classList.add("text"); //
console.log(document.querySelector("div").classList);
*/

//===========Keyboard Event================

/*
var i = document.querySelector("input");
i.addEventListener("keyup", function () {
  console.log(i.value);
}); //all current value

i.addEventListener("keypress", function () {
  console.log(i.value);
}); //same as keydown

i.addEventListener("keydown", function () {
  console.log(i.value);
}); //fist space and then all previous key down value not the current
*/

//============Mouse Event===============
// const btn1 = document.querySelector("button");

// function changecolor() {
//   let hasclass = btn1.classList.contains("red");
//   if (hasclass) {
//     btn1.classList.remove("red");
//   } else {
//     btn1.classList.add("red");
//   }
// }

// btn1.addEventListener("click", changecolor);

//==========================================

// btn1.addEventListener("click", function () {
//   if (btn1.classList.contains("red") == true) {
//     btn1.classList.remove("red");
//   } else {
//     btn1.classList.add("red");
//   }
// });

//=========target,currentTarget===============

/*
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  //   e.currentTarget.classList.add("red");//event on which it is attached to - the current element
  e.target.classList.add("red"); //the event occured on
});
console.log(btn);

const link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
});
*/

//============bubbling===================

/*

const list = document.querySelector(".list-ol");
const container = document.querySelector(".container");
function showBubbling(e) {
  console.log("Current Target=", e.currentTarget);
  //   console.log("Target = ", e.target);
  //   if (e.target.classList.contains("l1")) {
  //     console.log("Link Clicked with class l1");
  //   }
}

function stopPropagation(e) {
  console.log("You Clicked On List");
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });


*/

//=====================dynamic Controls=============

const btn = document.querySelector("button");
const container = document.querySelector(".container");
// const h = document.querySelector(".heading");
function sayhello() {
  console.log("Say Hello");
}
btn.addEventListener("click", function () {
  const heading = document.createElement("h1");
  //   heading.innerText = "Hello there";
  //   document.body.prepend(heading);
  heading.classList.add("heading");
  heading.textContent = `It's inside the container`;
  container.appendChild(heading);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading"));
  {
    console.log("Helo there");
  }
});
// h.addEventListener("click", sayhello);
