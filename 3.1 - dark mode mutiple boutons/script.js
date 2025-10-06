const darkMSwitch = document.querySelectorAll("*");
const toggleSwitch = document.querySelectorAll(".switch");
const icons = document.querySelectorAll(".icon");

toggleSwitch.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    icons.forEach((icon) => {
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
    });
    darkMSwitch.forEach((elem) => {
      elem.classList.toggle("darkmode");
    });
  });
});
