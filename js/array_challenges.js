// console.log(student);
// console.log("john");

const updateStudent = student.map(function (s) {
  // console.log(s);
  if (s.score >= 90) {
    s.role = "Best student";
  } else if (s.score >= 80) {
    s.role = "Good Student";
  } else if (s.score >= 50) {
    s.role = "Average Student";
  } else {
    s.role = "student";
  }
  return s;
});
console.log(updateStudent);

const highscore = student.filter(function (s) {
  // if (s.score >= 80) {
  //   return s;
  // }
  return s.score >= 80;
});
console.log(highscore);

const specificId = student.find(function (s) {
  return s.id === 1;
});
console.log(specificId);

const averagescore =
  student.reduce(function (total, s) {
    //acc += curr.score;
    return total + s.score;
  }, 0) / student.length;

console.log(averagescore);

// //

// const subject = "math";
// const total = {};
// total[subject] = "";

const survey = student.reduce(function (total, s) {
  console.log(s.favoriteSubject);
  const fav = s.favoriteSubject;
  if (total[fav]) {
    total[fav] += 1;
  } else {
    total[fav] = 1;
  }

  return total;
}, {});
console.log(survey);

const a = Math.floor(Math.random() * 10 + 1);
console.log(a);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

const date = new Date("1/15/2003");

console.log(
  `${days[date.getDay()]},${date.getDate()} ${
    month[date.getMonth()]
  },${date.getFullYear()}`
);
