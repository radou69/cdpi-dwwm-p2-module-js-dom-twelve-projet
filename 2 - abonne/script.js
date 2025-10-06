/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

// 2. Je recupere le bouton ABONNER

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

// 4. J'ecoute le clique sur l'icone smiley

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ

const smiley = document.querySelector("#emoji");
const btnSub = document.querySelector(".btn-sub");


smiley.addEventListener("click",() => {
smiley.classList.toggle("face-slime"),
smiley.classList.toggle("happy")
});

btnSub.addEventListener("click", () => {
        btnSub.textContent = "ABONNER";        
        btnSub.classList.toggle("subscribed");
        btnSub.textContent = "Désabonner";
        btnSub.style.backgroundColor = "yellow";
        



    });