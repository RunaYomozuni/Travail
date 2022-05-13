//------- boucles FOR ... IN et FOR ... OF
let arr = ['Pixel', 'Tom', 'Jerry'];

// for( let indice in tableau)
for(let indice in arr){
    console.log(indice);
}
// for( let value in tableau)
for(let value of arr){
    console.log(value);
}
//------- boucle FOR ... OF sur un Objet
let Contact = {
    //"INDICE" : "VALEUR",
    prenom   : "Harry",
    nom      : "Potter",
    age     : 18,
    matieres : {
        magie  : 'transfiguration',
        potion : 'veritaserum',
        sport  : 'quiddich'
    },
    afficherNationalite : function(){
        document.write(`<p>nationalité : anglaise</p>`);
    }
};
for(let key in Contact){
    console.log(Contact[key]);
}
for(let [key, value] of Object.entries(Contact)){
    console.log(`${key} : ${value}`);
}
11 h 51
//------ exo Voiture avec une boucle
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

for(let key in car){
    if(typeof(car[key]) == "object"){
        for (let subKey in car[key]){
            if (car[key][subKey] === true){
                document.write('la voiture est sous garantie <br>');
            } else if (car[key][subKey] === false){
                document.write('la voiture n\'est pas sous garantie <br>');
            }  else{
                document.write(subKey + ' : ' + car[key][subKey] + '<br>');
            }
        }
    } else if(typeof(car[key]) == "function"){
        car.afficherOrigine();
    } else{
        document.write(key + ' : ' + car[key] + '<br>');
    }
}