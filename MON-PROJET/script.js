// On initialise notre variable de comptage
let nombreClics = 0;

// On récupère les éléments HTML
const bouton = document.getElementById('btnAction');
const affichageCompteur = document.getElementById('compteur');

// On écoute les clics sur le bouton
bouton.addEventListener('click', function() {
    nombreClics++; // On ajoute 1 à chaque clic
    affichageCompteur.textContent = nombreClics; // On met à jour l'affichage
});