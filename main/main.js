"use strict";

//set the location of scroll so that it does not go back to the original position
if (history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}

const introTitle = document.getElementsByClassName("intro_title")[0];
const introButton = document.getElementsByClassName("intro_button")[0];
const games = document.getElementById("games");

//title text
const title = "Hello, \nRoulette\nWorld!";

let count = 0;
let timer = 0;

function typingIntroTitle() {
  let character = title[count++];

  if (character === "\n") {
    introTitle.innerHTML = introTitle.innerHTML + "<br/>";
  } else {
    introTitle.innerHTML = introTitle.innerHTML + character;
  }

  if (count === title.length) {
    clearInterval(timer);
    introButton.classList.add("show");

    return;
  }
}

introButton.addEventListener("click", () => {
  console.log("button clicked");
  window.location.href = "../enterMoney.html";
});

function welcome() {
  console.log(`
        ⣀⣠⣤⣤⣤⣄⣀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣄⣀⠀⣀⣠⣤⣤⣤⣄⣀⠀⠀⣀⣠⣤⣤⣤⣄⣀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀WELCOME TO CASINO WORLD⣠⣾⣿⡿⣿⣿⣿⣿⣿⣶⣤⡀⠀
      ⠀⠀⠀⢿⣿⠇⠈⣹⢿⣿⠇⠈⣹⢀⠄⠒⢀⡰⠊⠉⠉⠀⠀⠈⢿⣿⠇⠈⣹⣿⢿⣿⠇⠈⣹⣷⣴⣿⣿⣶⣄⠀`);
}

window.onload = function () {
  welcome();

  timer = setInterval(typingIntroTitle, 200);
};
