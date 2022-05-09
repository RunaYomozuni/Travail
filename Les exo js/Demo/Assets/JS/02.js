/*
En programmation, pour manipuler des données/informations, il faut les avoir stockées quelque part.
 Pour cela on utilise les variables.
*/


/**--------------------------------------------------------------------
 * ------ I- DECLARATION - AFFECTATION - REAFFECTATION - SYNTAXE ------
 --------------------------------------------------------------------*/


// une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. de n'importe quel type ; chiffre, chaîne de caractères, une balise HTML etc.


// --1-- Attention /!\ le JS est sensible à la casse ('case sensitive')
// mavariable =/= maVariable =/= ma_variable
//                camel case     snake case


// --2-- Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être un mot réservé (var,
// for... des éléments natifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s


// --3-- Déclarer une variable en JS
var prenom;
let bjr;

// à la volée
let a,
    b,
    c;

// --4-- Affecter une valeur à une variable
prenom = "Mila";
bjr = "Hello !";

// on peut le faire en une seule fois ==>> Affectation par valeur
var prenom = "Mila";
let bjr = "Hello !";

// ou à la volée
let d = 'hi',
    e = 4,
    f = true;

// --5-- changer la valeur d'une variable
prenom = 'Kevin'; // nous changeons la valeur d'une variable

document.write(prenom);
document.write('<hr>');


// --6-- Affectation par référence
prenom = nom; // nous affectons à une variable le contenu d'une autre variable

document.write(prenom);

// --6-- Ajouter une valeur à la valeur déjà existante d'une variable
// let fruit = 'pomme';
// fruit += 'fraise';// on ajoute la chaîne de caractère fraise à pomme qui est déjà existante à la variable fruit avec l'opérateur +=

// document.write(fruit);

/** IMPORTANT : Les deux mots clés 'LET' et 'VAR'
 *
 * le mot clé VAR existe depuis le début de JS en 1995 (créateur : Brendan Eich)
 * le mot clé LET fait partie d'ECMAScript 6 (2015), il est plus récent que VAR et le remplacera à terme
 * LET est plus sécurisé que VAR : on ne peut déclarer une variable qu'une seule fois avec LET alors que VAR le permet, une variable LET n'existe que dans le bloc dans lequel elle est définie
 * Le mot-clé LET permet de définir des variables au sein d'un bloc et des blocs qu'il contient. Sa principale caractéristique est sa portée : elle est limitée à celle du bloc courant. Pour rappel, un bloc en Javascript, c'est ce qu'on retrouve entre accolades : une comparaison en if, une boucle while etc…
 * VAR permet quant à lui de définir une variable dont la portée est soit globale, soit celle de la fonction englobante. Dans les blocs IF ou FOR (tout ce qui n'est pas une fonction) VAR conserve une portée globale contrairement à LET.
 *
 * Plus d'infos : https://riptutorial.com/javascript/example/1574/difference-between-var-and-let
 */


// --7-- Une variable peut être déclarée de façon explicite :
//var fruit;
//var fruit = "fraise";

// ou implicite :

//var fruit_2 = "coco";
//haribo = "Tagada";

/**
 * /!\ une déclaration implicite correspond à l'utilisation du mot clé VAR
 */



/**-------------------------------------------------
 * ------ II- LES TYPES DE DONNEES PRIMITIVES ------
 -------------------------------------------------*/

// -- 1. Chaîne de caratères (string)
let vacances = "2017";
let destination = "Australie";

// -- 2. Un nombre entier (integer ou int)
let annee = 2017;

// -- 3. Un nombre décimal (float)
let nombre_a_virgule = -5.32;

// -- 4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
let unBooleen = false; // -- true

// -- 5. Les Constantes
/* La déclaration 'const' permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée par réaffectation plus bas dans le code.
Une constante ne peut pas être déclarée à nouveau dans le même script.
*/

// -- Par convention les constantes sont en majuscules
const PAYS = "France"; // string
const AN = '2020'; // string
const BIRTH = 2020; // nombre


// En JS les variables sont auto-typées

/**
 * EXO - BUDDY, A LA NICHE
 *  Afficher dans la page (ou la console) le prénom renseigné par l'utilisateur suivi de ', à la niche !'
 */
let tonPrenom = prompt('Quel est ton prénom ?');
let msg = ', à la niche !';
document.write(tonPrenom + msg);
console.log(tonPrenom, msg);


/**------------------------------------------------------------------
 * ------ III- OPERATIONS COURANTES SUR LES TYPES DE VARIABLES ------
 -------------------------------------------------------------------*/

// --1-- typeof permet de connaître le type de ma variable
let name = "Harry";
let age = 11; // integer
let taille = 1.4; // float
let parents = false;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(taille));
console.log(typeof(parents));

let nb = "24";
console.log(nb);
console.log(typeof nb);

// -- La Fonction parseInt() pour retourner un Entier à partir de ma chaine de caractère
nb = parseInt(nb);
console.log(nb);
console.log(typeof nb);

// -- Je ré-affecte une valeur à ma variable
nb = "12.55";
console.log(nb);
console.log(typeof nb);

// -- La Fonction parseFloat() permet de retourner un Float sur la Base d'une chaine de caractère
nb = parseFloat(nb);
console.log(nb);
console.log(typeof nb);

// -- Conversion d'un Nombre en String avec toString()
let nbToStr = 10;
let str = nbToStr.toString();
console.log(nbToStr);
console.log(typeof nbToStr);
console.log(typeof str);

// -- Compter les lettres d'une chaîne de caractères
let phrase = "Si vous êtes agités, à la niche !";

// La propriété length représente la longueur d'une chaine de caractères.
// Donc le résultat ici est: 33.
console.log(phrase.length);

// Retourne la valeur de la chaîne courante, convertie en majuscules
// Donc le résultat ici est: "SI VOUS ÊTES AGITÉS, À LA NICHE !!".
console.log(phrase.toUpperCase());

// Retourne la chaîne de caractères courante en minuscules
// Donc le résultat ici est: "si vous êtes agités, à la niche !"
console.log(phrase.toLowerCase());