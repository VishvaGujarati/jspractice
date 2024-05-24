// //global name space /hard to navigate

// import { random, people } from "../util/data.js";
// import speople from "../util/showpeople.js";

import get from "../util/getelement.js";

// // const container = document.querySelector(".container");
// // const btn = document.querySelector(".btn");

// const container = get(".container");
// const btn = get(".btn");
// // const container1 = get(".container1");

// btn.addEventListener("click", () => {
//   // showpeople();
//   container.innerHTML = speople(people);
// });

//callback,pomises,async/await

const head1 = get(".one");
const head2 = get(".two");
const head3 = get(".three");
const btn = get(".btn");

btn.addEventListener("click", () => {
  // console.log("You clicked the button");

  //callback hell
  setTimeout(() => {
    head1.style.color = "red";
    setTimeout(() => {
      head2.style.color = "green";
      setTimeout(() => {
        head3.style.color = "blue";
      }, 2000);
    }, 1000);
  }, 1000);
});
console.log("I M second");
