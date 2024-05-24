// let student = [
//   { id: 1, name: "namrata", score: 80, favoriteSubject: "math" },
//   { id: 2, name: "vishva", score: 90, favoriteSubject: "english" },
//   { id: 3, name: "vatsal", score: 100, favoriteSubject: "math" },
//   { id: 4, name: "vaidehi", score: 70, favoriteSubject: "science" },
//   { id: 5, name: "jash", score: 40, favoriteSubject: "math" },
// ];
// function sayName(name) {
//   console.log(name);
// }

//find,findIndex,some,every function

// const std = student.find((i) => i.score == 100);
// console.log(std);
// const newstd = student.slice(0, std.id);
// console.log(newstd);

// const std = student.findIndex((i) => i.score == 100);
// console.log(std);
// const newstd = student.slice(0, std);
// console.log(newstd);

const name1 = ["vishva", "vatsal", "vaidehi"];
const name2 = ["jash", "namrata"];

const jname = name1.every((i) => i.includes("v", 0));
console.log(jname);

const vname = name2.some((i) => i.includes("j", 0));
console.log(vname);
//array destruction

// const [s1, , s3, s4] = student;
// console.log(s1, s3, s4);

// let f = "vishva";
// let s = "vaidehi";

// // let temp = s;
// // s = f;
// // f = temp;
// [f, s] = [s, f];

// console.log(f, s);

//object destruction

// const person = {
//   fname: "vishva",
//   lname: "gujarati",
//   city: "surat",
//   siblings: { sis: "vaidehi", bro: "jash" },
// };
// console.log(
//   person.fname,
//   person.lname,
//   person.city,
//   person.siblings.sis,
//   person.siblings.bro
// );
// const {
//   fname: f,
//   lname: l,
//   city: c,
//   siblings: { sis: s, bro: b },
// } = person;

// console.log(f, l, c, s, b);

//function parameter
// function printperson(fname, lname, city, siblings) {
//   console.log(fname, lname, city, siblings);
// }
// printperson(person);

//startsWith(),endsWith(),includes(),repeat()
const person = "Vi shva gujr ati";
const manager = "vatsal gujarati";
const emp = "jash gujarati";
let newstring = "";
let newstr = "";

// console.log(emp.endsWith("ja", 9));
// console.log(manager.startsWith("ja", 9));

// const multi = (person, amt = 5) => person.repeat(amt); //with default argument

// const people = multi(person, 10);
// console.log(people);

//loop for of

// for (const letter of person) {
//   if (letter === " ") {
//     continue;
//   } else {
//     newstring += letter;
//   }
// }
// console.log(newstring);

// for (const letter of manager) {
//   if (letter === " ") {
//     break;
//   }
//   newstr += letter;
// }
// console.log(newstr);
