const nam = "vishva";
const age = 20;
const res = templatestrings`Hey, My Name Is ${nam} And I Am ${age} Years Old`;
function templatestrings(txt, ...variables) {
  const csstext = txt.map((item, index) => {
    return `${item} <strong style="color:blue">${
      variables[index] || ""
    }</strong>`;
  });
  return csstext.join("");
}
document.write(res);
