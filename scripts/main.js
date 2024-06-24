const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/taiyaki-hat.png") {
    myImage.setAttribute("src", "images/taiyaki-wep.png");
  } else {
    myImage.setAttribute("src", "images/taiyaki-hat.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName}, I love taiyaki!!!`;
  }
}


myButton.onclick = () => {
  setUserName();
};
