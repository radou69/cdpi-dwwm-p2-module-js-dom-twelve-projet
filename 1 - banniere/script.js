/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

// 2. Je recupere la banniere de cookies

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
const banner = document.querySelector(".cookies");
const btnAccept = document.querySelector(".btn-accept");

btnAccept.addEventListener("click", () => {
  banner.classList.add("fade-out");

  // Après la durée de la transition (1000 ms), on cache complètement
  setTimeout(() => {
    banner.style.display = "none";
  }, 1000);
});
