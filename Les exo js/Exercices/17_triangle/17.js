let taille = parseInt(prompt("saisie la taille"));
if (isNaN(taille)){
    alert("met un chiffre");
}
let ht = "#"
for (let i = 0; i <= taille; i++){
    console.log(ht);
    ht += "#"
}