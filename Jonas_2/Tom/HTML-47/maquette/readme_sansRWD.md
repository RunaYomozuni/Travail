# Tech News

Les textes et liens nécéssaires sont fournis

Le site se découpe en :
    - un entête contenant le menu de navigation
    - une partie principale :
        - sur la gauche un extrait d'article (image + texte + en savoir plus)
        - sur la droite un "widget" contenant des liens vers d'autres infos
    - un pied de page

Le site doit etre sur toute la largeur de la zone d'affichage 
    - nav et footer : 100%
    - contenu principal : 95%
Le site doit faire au minimum toute la hauteur de la zone d'affichage
Le site sera sur fond blanc

## Polices
Site :
    - font-family: 'Raleway', sans-serif;
    - font-size: 1.12rem

Certains éléments dans la nav et le footer :
    - font-family: 'Megrim', cursive;
    - font-size: 1.85rem; (pour la nav uniquement)

## Couleurs
Nav 
    - fond : #37505c
    - page active : 
        fond : #A0CFD3
        couleur : #37505c
    - survol : 
        fond : #de6449
        couleur : blanc

Footer
    - fond : #37505c
    - couleur liens partenaires : #AAA

## L'entête - Nav
    - 60px de haut
    - nav toute la largeur de la page
    - fond en couleur noir
    - texte en blanc
    - titre d'assez grande taille, centré verticalement, avec seulement une marge de 10px à gauche et à droite
    - chaque élément du menu doit faire 150px de large et le texte doit etre centré horizontalement et verticalement
    - les liens de la nav ne sont pas soulignés
    - au survol le fond des éléments de la liste de lien doit passer en couleur

## Contenu principal - article
    - l'article doit etre a gauche et doit prendre 70% de la largeur avec une marge interne de 10px.
    - dans l'article, le titre doit etre au dessus, en majuscule
    Dans l'article, l'image doit etre tout à gauche et doit prendre seulement 30% de l'espace 
    - les images ont une légère ombre
    - les images ont des marges à droite et en bas de 30px 
    - le texte extrait de l'article doit etre justifié
    - le lien "En savoir plus" doit etre en rouge, sans soulignement et aligné a droite sous l'article.
    - au survol, le lien "En savoir plus" doit etre souligné.

## Le widget (contenu annexe)
    - placé a droite de la page il doit prendre 30% de la largeur,  sur fond gris clair
    - au survol, les éléments annexes ont une couleur de fond et de police qui changent

## Le pied de page
    - marge interne de 10px
    - les partenaires doivent etre a gauche, les un en dessous des autres
    - les liens du footer doivent etre en gris clair (#AAA) et se souligner au survol
    - les éléments de contact doivent etre absolument en bas à droite 


## Bonus

/!\ Ne faire les bonus que si tout le reste est finalisé (sinon le ou les bonus ne seront pas comptabilisés dans votre résultat)

### Transitions
    - barre de navigation : le changement de couleur de fond au survol d'un lien doit faire l'objet d'une transition
    - les liens du widget ; au survol ils changent de couleur de fond et un effet de zoom est appliqué
    - footer : le lien de contact ne doit plus etre souligné au survol, mais la taille du texte doit s'agrandir (1.5rem)

### JavaScript
    - au scroll vers le bas de plus de 50px la nav devient transparente
    - une fois remonté en haut de la page (moins de 50px) la nav redevient opaque

Bon travail à tous !