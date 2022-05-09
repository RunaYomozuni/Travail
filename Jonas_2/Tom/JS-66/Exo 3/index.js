let heure = prompt("Entrez une ou des Heure Valide");
let minute = prompt("Entrez une ou des minutes Valide");
if (heure > 24) {
  alert("Vous avez entrez une heure invalide , recommencer");
}
if (minute > 60) {
  alert("Vous avez entrez des minute invalide , recommencer");
}
function calc() {
  heure * 3600;
  minute * 60;
}
console.log(calc());
// il ne verifie pas les erreur de saisie, le code ne marche pas