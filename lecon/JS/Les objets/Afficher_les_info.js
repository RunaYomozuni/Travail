// ----- afficher les infos d'un objet littéral
function w(w){
    document.write(w + '<br>');
}

let car = {
    marque : 'Peugeot',
    couleur : 'Orange',
    motorisation : {
        energie :'diesel',
        puissance : '110 CV',
        garantie : true
    },// fin motorisation
    afficherOrigine : function () {//afficherOrigine est une méthode de ma voiture
        document.write('<p>origine française</p>');
    }// fin function
};// fin déclaration objet ma voiture

w(car['marque']);
w(car.couleur);
car.afficherOrigine();
w(car.motorisation['energie']);
w(car.motorisation.puissance);









