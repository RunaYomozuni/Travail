let tableau = ["31","28","30"];
let nombre = parseInt(prompt("Saisie un mois entre 1 et 12"));

if (isNaN(nombre)){
    alert("Saisie un nombre valide");
}
else {
    if (nombre > 12) {
        alert("Un nombre entre 1 et 12 pas plus");
    } else if (nombre === 1 || nombre === 3 || nombre === 5 || nombre === 7 || nombre === 8 || nombre === 10 || nombre === 12) {
        alert(tableau[0]);
    } else if (nombre === 2) {
        alert(tableau[1]);
    } else if (nombre === 4 || nombre === 6 || nombre === 9 || nombre === 11) {
        alert(tableau[2]);
    }
}