import get from "../util/getelement.js";

const head1 = get(".one");
// const head1 = document.querySelector(".four");

const head2 = get(".two");
// const head2 = document.querySelector(".four");
const head3 = get(".three");
const btn = get(".btn");
const container = get(".img-container");
const url = "https://source.unsplash.com";
//=========================================Callback hell===========================================

// btn.addEventListener("click", () => {
//   // console.log("You clicked the button");

//   //callback hell
//   setTimeout(() => {
//     head1.style.color = "red";
//     setTimeout(() => {
//       head2.style.color = "green";
//       setTimeout(() => {
//         head3.style.color = "blue";
//       }, 2000);
//     }, 1000);
//   }, 1000);
// });
// console.log("I M second");

//================================================promise===========================================

// btn.addEventListener("click", () => {
//   const promise = new Promise((t, f) => {
//     let value = false;
//     if (value) {
//       t("Hey Value is true");
//     } else {
//       f("oops value is false");
//     }
//   });
//   promise
//     .then((abc) => {
//       console.log(abc);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//=====================================================random image=============================================================

// btn.addEventListener("click", () => {
//   loadImage(url)
//     .then((data) => container.appendChild(data))
//     .catch((err) => console.log(err));
// });

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error(`failed to load your image from the source :${url}`));
//     });
//     img.src = url;
//   });
// }

//===========================color change  reject example==================================
/*
btn.addEventListener("click", () => {
  addcolor(1000, head1, "red").then(() =>
    addcolor(2000, head3, "blue")
      .then(() => addcolor(1000, head2, "green"))
      .catch((err) => console.log(err))
  );
});

function addcolor(time, ele, color) {
  return new Promise((resolve, reject) => {
    if (ele) {
      setTimeout(() => {
        ele.style.color = color;
        resolve(); //if we resolve then and then the 'then' callback will run in function call
      }, time);
    } else {
      reject(new Error(`There is no such element present ${ele}`));
    }
  });
}

*/

//=====================================================async await========================================================
btn.addEventListener("click", async () => {
  const result = await displaycolor(); //.then((data) => {
  //     console.log(data);
  //   });
  console.log(result);
});

async function displaycolor() {
  try {
    const first = await addcolor(500, head1, "red");
    await addcolor(1000, head2, "blue");
    await addcolor(1000, head3, "green");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return "hello";
}

function addcolor(time, ele, color) {
  return new Promise((resolve, reject) => {
    if (ele) {
      setTimeout(() => {
        ele.style.color = color;
        resolve(); //if we resolve then and then the 'then' callback will run in function call
      }, time);
    } else {
      reject(new Error(`There is no such element present ${ele}`));
    }
  });
}
