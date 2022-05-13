// ----------------- ÉNONCÉ -----------------

/**
 * Créer un objet littéral pour une voiture
 * Cet objet devra avoir les propriétés suivangtes :
 *  - marque (str)
 *  - couleur (str)
 *  - motorisation (obj) détaillant :
 *          - énergie (str)
 *          - puissance (str)
 *          - garantie (bool)
 *
 * et la méthode
 *  - afficherOrigine (f)
 *  qui va simplement afficher le pays d'origine de la voiture
 *
 *  Afficher une par une dans la page dans des paragraphes les informations suivantes :
 *  - la marque de la voiture,
 *  - sa couleur,
 *  - son origine,
 *  - son énergie,
 *  - si elle est sous garantie ou non.
 */

let mathiasfermetagueule = {
    marque: "Tesla",
    couleur: "Blanche",
    motorisation: {
        energie: 600,
        puissance: "1100CV",
        garantie: false
    },
    afficherOrigine: function (){
        document.write(`Le pays d'origine de la ${this.marque} viens du japon`)
    }
}
document.write(mathiasfermetagueule["marque"])
document.write("<br>")
document.write(mathiasfermetagueule["couleur"])
document.write("<br>")
mathiasfermetagueule.afficherOrigine()
document.write("<br>")
document.write(mathiasfermetagueule.motorisation["energie"])
document.write("<br>")
document.write(mathiasfermetagueule.motorisation["garantie"])
