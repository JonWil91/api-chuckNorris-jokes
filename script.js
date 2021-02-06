
let output = document.querySelector("#output");
let btn = document.querySelector("button");

btn.addEventListener("click", getJoke);

function getJoke() {}

let xhr = new XMLHttpRequest();
let url = "https://api.chucknorris.io/jokes/random";
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    let str = xhr.responseText;
    let obj = JSON.parse(str);
    console.log(obj);
  }
};
xhr.open("GET", url);
xhr.send();
