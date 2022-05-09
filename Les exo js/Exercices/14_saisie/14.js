let saisie  = prompt("Veuillez saisir un nombre !");
do{
    let saisie  = prompt("Veuillez saisir un nombre !");
    if (isNaN(saisie)){
        alert("met un chiffre !")
    }
    if(saisie <= 100 && saisie >= 50){
        alert("ez")
    }
}
while (saisie >= 100 || saisie <= 50);
