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
let afterwords = document.getElementById("afterwords");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    afterwords.textContent = `Hi ${myName}! Thanks for reading!`;
  }
}


myButton.onclick = () => {
  setUserName();
};
