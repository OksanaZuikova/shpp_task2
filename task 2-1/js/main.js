function hide() {
  let elements = document.getElementsByClassName("squere");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}
function removeSqueres() {
  let elements = document.getElementsByClassName("squere");
  let counter = elements.length;
  for (let i = 0; i < counter; i++) {
    elements[0].remove();
  }
}
function hidden() {
  let elements = document.getElementsByClassName("squere");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hidden")) {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}
document.getElementById("button2").onclick = removeSqueres;
document.getElementById("button3").onclick = hidden;

function changeElement(event) {
  event.preventDefault();
  let selector = document.querySelector("#input1").value;
  let element = document.querySelector(`.${selector}`);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
let form1 = document.querySelector(".form1");
form1.addEventListener("submit", changeElement);

let squereButton = document.querySelector(".yellow-squere");
function removeSquere() {
  squereButton.remove();
}
function showAlert() {
  alert("Привет!");
  squereButton.removeEventListener("click", showAlert);
  squereButton.addEventListener("click", removeSquere);
}
squereButton.addEventListener("click", showAlert);

let redSquereButton = document.querySelector(".red-squere-button");
redSquereButton.addEventListener("mouseover", showSquere);
redSquereButton.addEventListener("mouseout", hideSquere);

function showSquere() {
  let redSquere = document.querySelector(".red-squere");
  redSquere.classList.remove("hidden");
}
function hideSquere() {
  let redSquere = document.querySelector(".red-squere");
  redSquere.classList.add("hidden");
}

function showRectangle() {
  let rectangle = document.querySelector(".rectangle");
  rectangle.classList.remove("hidden");
}
function hideRectangle() {
  let rectangle = document.querySelector(".rectangle");
  rectangle.classList.add("hidden");
}
let input1 = document.getElementById("input1");
input1.addEventListener("focus", showRectangle);
input1.addEventListener("input", hideRectangle);

function showImage(event) {
  event.preventDefault();
  let url = document.querySelector("#input2").value;
  url = url.split("\n");
  url.forEach((element) => {
    let imgElement = document.createElement("img");
    imgElement.src = element;
    document.body.append(imgElement);
  });
}
let form2 = document.querySelector(".form2");
form2.addEventListener("submit", showImage);

function showCoordinates(event) {
  let x = event.screenX;
  let y = event.screenY;
  let coor = "X: " + x + ", Y: " + y;
  let coordinates = document.querySelector(".coordinates");
  coordinates.innerHTML = coor;
}
document.body.addEventListener("mousemove", showCoordinates);

let language = navigator.language;
document.querySelector(".language").innerHTML = language;

function showPosition(position) {
  document.querySelector(".location").innerHTML =
    "Ш: " + position.coords.latitude + ", Д: " + position.coords.longitude;
}
let locat = navigator.geolocation.getCurrentPosition(showPosition);

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
function saveValues() {
  let value = div1.innerHTML;
  let key = "innerDiv";
  localStorage.setItem(key, value);
}
function getValues() {
  div1.innerHTML = localStorage.getItem("innerDiv");
}
div1.addEventListener("input", saveValues);
window.addEventListener("load", getValues);

function saveCookie() {
  let value = div2.innerHTML;
  document.cookie = `${value};`;
  console.log(document.cookie);
}
function getCookie() {
  div2.innerHTML = document.cookie;
}
div2.addEventListener("input", saveCookie);
window.addEventListener("load", getCookie);

function saveSessionValues() {
  let value = div3.innerHTML;
  sessionStorage.setItem("div3", value);
}
function getSessionValues() {
  div3.innerHTML = sessionStorage.getItem("div3");
}
div3.addEventListener("input", saveSessionValues);
window.addEventListener("load", getSessionValues);

function showUpButton() {
  let windowRelativeBottom =
    document.documentElement.getBoundingClientRect().bottom;
  let upButton = document.getElementById("up-button");
  if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
    upButton.classList.remove("hidden");
  } else {
    upButton.classList.add("hidden");
  }
}
window.addEventListener("scroll", showUpButton);

let upButton = document.getElementById("up-button");
upButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function showOuterAlert() {
  alert("outerDiv");
}
function showInnerAlert(event) {
  event.stopPropagation();
  alert("innerDiv");
}
let outerDiv = document.getElementById("outer");
let innerDiv = document.getElementById("inner");
outerDiv.addEventListener("click", showOuterAlert);
innerDiv.addEventListener("click", showInnerAlert);

let greySquereButton = document.getElementById("squere-button");
let greySqure = document.querySelector(".grey-squere");

function showGreySquere() {
  greySqure.classList.remove("hidden");
  document.body.classList.add("stop-scroll");
}
function hideGreySquere() {
  greySqure.classList.add("hidden");
  document.body.classList.remove("stop-scroll");
}
greySquereButton.addEventListener("click", showGreySquere);
greySqure.addEventListener("click", hideGreySquere);

let go = document.getElementById("go");
go.addEventListener("click", function (event) {
  event.preventDefault();
});

let fileInput = document.querySelector(".file");
function changeColor() {
  fileInput.classList.add("file-over");
}
function changeColor2() {
  fileInput.classList.add("file-in");
}
function returnColor() {
  fileInput.classList.remove("file-over");
}
fileInput.addEventListener("dragenter", changeColor);
fileInput.addEventListener("change", changeColor2);
fileInput.addEventListener("dragleave", returnColor);
