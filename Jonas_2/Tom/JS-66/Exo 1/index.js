let nbm1 = prompt("Entrer une valeurs");
let nbm2 = prompt("Entrer une autre valeurs");
if (nbm1 > 20 || nbm2 > 20){
    alert("Valeur invalide")
}
if (nbm1 > nbm2){
    alert("Le player 1 a gagner")
}
if (nbm2 > nbm1){
    alert("Le player 2 a gagner")
}
if(nbm1 === nbm2){
    alert("Match Nul")
}