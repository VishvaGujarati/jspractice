const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  //   console.log(xhr);
  xhr.onreadystatechange = function () {
    //   console.log(xhr);
    if (this.readyState == 4 && this.status === 200) {
      const text = document.createElement("p");
      text.innerHTML = `<strong>${this.responseText}</strong>`;
      document.body.appendChild(text);
    } else {
      console.log({ status: this.status, text: this.statusText });
    }
  };
  xhr.send();
  console.log("hello world");
}
