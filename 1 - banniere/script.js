const banner = document.querySelector(".cookies");
const btnAccept = document.querySelector(".btn-accept");

btnAccept.addEventListener("click", () => {
  banner.classList.display("none");

  // Après la durée de la transition (1000 ms), on cache complètement
  setTimeout(() => {
    banner.style.display = "none";
  }, 1000);
});
