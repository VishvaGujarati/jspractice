// const showpeople = (people) => {
//   const newp = people
//     .map((person) => {
//       // console.log(person);
//       const { name, job } = person;
//       return `<p>${name}<strong> ${job}</strong></p>`;
//     })
//     .join(" ");
//   //   console.log(newp);
//   return newp;
// };

// export default showpeople;

export default (people) => {
  const newp = people
    .map((person) => {
      // console.log(person);
      const { name, job } = person;
      return `<p>${name}<strong> ${job}</strong></p>`;
    })
    .join(" ");
  //   console.log(newp);
  return newp;
};
