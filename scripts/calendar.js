const primaryColor = "#55dde0";
const secondaryColor = "#f26419";
const primaryDark = "#33658a";
const secondaryLite = "#f6ae2d";
const backgroundDark = "#2f4858";

// section calendar in file todaystask.html, handles transformation of the calendar from week to month and back.

var writtenDate = document.getElementById("date-year");
var weekDates = [...document.querySelectorAll(".hidden")];
var calendarWrapper = document.querySelector(".calendar-wrapper");

console.log(writtenDate.innerHTML);
count = 0;

writtenDate.addEventListener("click", (event) => {
  if (count == 0) {
    calendarWrapper.style.height = "255px";
    weekDates.forEach((e) => {
      e.classList.remove("hidden");
    });
    count++;
  } else {
    calendarWrapper.style.height = "135px";
    weekDates.forEach((e) => {
      e.classList.add("hidden");
    });
    count--;
  }
});

// section timeline in file todaystask.html, handles focus of the pages all, ongoing and completed

var allMenu = document.querySelector(".all-menu");
var ongoingMenu = document.querySelector(".ongoing-menu");
var completedMenu = document.querySelector(".completed-menu");

allMenu.addEventListener("click", (event) => {
  allMenu.style.background = "#f26419";
  allMenu.style.color = "white";
  ongoingMenu.style.background = "transparent";
  ongoingMenu.style.color = "black";
  completedMenu.style.background = "transparent";
  completedMenu.style.color = "black";
});

ongoingMenu.addEventListener("click", (event) => {
  ongoingMenu.style.background = "#55dde0";
  ongoingMenu.style.color = "black";
  allMenu.style.background = "transparent";
  allMenu.style.color = "black";
  completedMenu.style.background = "transparent";
  completedMenu.style.color = "black";
});

completedMenu.addEventListener("click", (event) => {
  completedMenu.style.background = "#33658a";
  completedMenu.style.color = "white";
  allMenu.style.background = "transparent";
  allMenu.style.color = "black";
  ongoingMenu.style.background = "transparent";
  ongoingMenu.style.color = "black";
});
