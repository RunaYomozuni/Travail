/*
    EXO Sac à dos

    Réaliser une classe Sac qui permettra de faire ses courses. Il ne peut contenir qu'un nombre limité d'articles.
   On peut y mettre des articles, chaque article ne peut être qu'en un seul exemplaire.
   On doit avoir les méthodes suivantes :
• Ajouter
• Contenu
• Taille
• Vide

-BONUS-
- je peux voir la liste de ce que le sac contient
- je peux retirer un objet du sac
*/

function Sac() {
    this.contenu = [];
    this.taille = 5;
    this.vide = true;


    this.add = function (contenu, quantite) {
        for (let i = 0; i < this.taille; i++) {
            contenu = prompt('Quelle article veux tu mettre dans ton panier')

            if (this.contenu.includes(contenu)) {
                alert("Ce contenue est deja dans votre panier");

            } else if (!isNaN(contenu) || contenu === null || contenu === " ") {
                alert('tu ne doit pas mettre de chiffre')
            }
            quantite = prompt('Quelle quantité veux tu mettre de cette article');

            if (quantite > this.taille) {
                alert("tu n'as pas assez de place dans ton sac pour mettre autant d'article")
            } else {
                this.contenu.push([`${contenu} : ${quantite}`]);
                this.taille -= quantite
                this.vide = false
            }
            this.full = function (contenu) {
                if (this.contenu.length >= this.taille) {
                    console.log(ajout);
                    alert('Votre sac est plein')
                    let ask = confirm(' voulez vous retiré un article de votre sac');
                    if (ask === true) {
                        contenu = prompt('retirer un article de votre sac');
                        if (contenu === "all") {
                            this.contenu.splice(this.taille);
                        }
                        // else if (!this.contenu.includes(contenu)) {
                        //     alert("L'article que tu essaye de retiré n'existe pas");
                        //     this.contenu.pop();
                        //   }
                        // else if (!isNaN(contenu)) {
                        //      this.contenu.pop(contenu);
                        //      console.log("ok");
                        // }
                    } else {
                        this.contenu.shift(contenu);
                    }
                }
            }
        }
    }
}

let ajout = new Sac();
ajout.add();
ajout.full();
console.log(ajout.contenu);
console.log(ajout);

