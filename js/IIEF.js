// (function () {
//   const a = 20;
//   const b = 30;
//   console.log(`result=${a + b}`);
// })();

// (function (a, b) {
//   //   const a = 20;
//   //   const b = 30;
//   console.log(`result=${a + b}`);
// })(30, 50);

// const result = (function (a, b) {
//   //   const a = 20;
//   //   const b = 30;
//   return `result=${a + b}`;
// })(30, 40);
// console.log(result);

//=========================closure========================

// function parent() {
//   let pname = "abc"; //private to the function
//   function child() {
//     let name = "xyz";
//     console.log(`my name is ${name} and my parent's name is ${pname}`);
//   }
//   child(); //if it is not returned the only way to invoke it must call the parent function
//   return child;
//   //must have to return in order to use it as parent()()
// }
// parent(); //not returned
// parent()(); //if returned only way to invoke it
// const value = parent(); //if it retuens the function
// console.log(value);
// // console.log(child());
// //can not access it from the outside

//=================closure================

function newAccount(name, init) {
  let bal = init;
  function showBal() {
    console.log(`hey ${name} your balance is : ${bal}`);
  }
  function deposite(amt) {
    bal += amt;
    showBal();
  }
  function withdraw(amt) {
    if (amt > bal) {
      console.log(`Hey ${name} , you don't have the sufficient balance`);
      return;
    }
    bal -= amt;
    showBal();
  }
  //return showBal(); //when we create a new instance it will be invoked
  //   return showBal; //we have to invoke it by the name of the instance
  return { sh: showBal, dep: deposite, draw: withdraw }; //we can call it with the dot operator with the instance name and the function's object name
}

newAccount("vishva", 2000);
const jash = newAccount("jash", 4000);
const vaidehi = newAccount("vaidehi", 9000);

jash.sh();
vaidehi.sh();
jash.dep(1000);
vaidehi.draw(9000);
vaidehi.draw(100);
jash.draw(5000);
