
let output = document.querySelector("#output");
let btn = document.querySelector("button");

btn.addEventListener("click", getJoke);

function getJoke() {
  console.log("New joke coming");
  const xhr = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
      output.innerHTML = obj.value + "<br>" + `<img src=${obj.icon_url}>`;
    } else {
      output.innerHTML = "ERROR";
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
