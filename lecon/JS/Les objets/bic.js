// function Stylo(color) {
//     this.couleur = color;
//     this.niveau = 100
//     this.ouvert = false
//
//     this.ouvrir = function (){this.ouvert = true;}
//     this.fermer = function (){this.ouvert = false;}
//
//     this.ecrire = function (ez){
//         if (this.ouvert){
//             console.log(ez);
//         } else {
//             console.log("trop con, tu sais pas utilisé un stylo ?");
//         }
//     }
// }
// let bic = new Stylo('noir');
// bic.ouvrir()
// bic.ecrire(':D')
// console.log(bic)

/*
EXO Bic Numérique
Créer un constructeur Stylo qui a les membres suivants :
- couleur (str)
- niveau (int)
- ouvert (bool)
- ecrire (f)

Le résultat attendu  est le suivant :
- je ne peux écrire que si le bouchon est enlevé
- je dois pouvoir décider d'ouvrir ou de fermer le stylo
- à la création d'un nouvel objet le niveau d'encre est à 100, au fur et à mesure que j'écris ce niveau diminue, lorsque qu'il n'y a plus d'encre on ne peut plus écrire

-BONUS-
- on peut recharger l'encre
- l'écriture (document.write()) se fait dans la couleur choisie pour le stylo
*/
function friction() {
    this.encre = 2
    this.ouvert = false
    this.vide = false


    this.ouvrir = function () {this.ouvert = true}
    this.fermer = function () {this.ouvert = false}
    this.videOn = function (){
        if (this.encre <= 0){
            this.vide = true;
        }
    }

    this.recharge = function (nombre) {
        if (this.vide === true) {
            nombre = prompt("Donne le nombre d'unité de recharge")
            this.encre += nombre;
        }
    }


    this.ecrire = function(texte,color) {
        if (this.ouvert){
            texte = prompt("Ecrit ta phrase")
            color = prompt("Choisis ta couleur de texte")
            console.log(color)
            document.write(texte.fontcolor(color));
            this.encre -= texte.length;
        } else {
            alert("dumb boy");
        }

    }

}
let mine = new friction();
mine.ouvrir()
mine.ecrire()
mine.recharge()
console.log(mine)




