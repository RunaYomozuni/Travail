let nbr = parseInt(prompt("saisie un chiffre"));
if (isNaN(nbr)) {
    alert("met un chiffre !")
}
for (let i = 0; i <= nbr; i++){
     if (i % 2 === 0){
        console.log(i + " est paire");
    }
    else {
        console.log(i + " est impaire");
    }
}