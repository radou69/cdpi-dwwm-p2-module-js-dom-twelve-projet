/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/
const darkMSwitch = document.querySelectorAll("*");
const toggleSwitch = document.querySelector(".switch");
const icon = document.querySelector(".icon");

toggleSwitch.addEventListener("click", () => {
icon.classList.toggle("fa-sun");
icon.classList.toggle("fa-moon");
darkMSwitch.forEach((elem) => {
    elem.classList.toggle("darkmode");
  });
});
