// ? sert a designer le if
// : = else
// dans les () on met la condition du if
//tout se fait en une seule ligne
//Les else if n'existe pas

//par exemple :
// (param > 10) ? msg = 'hello' : msg = 'Goodbye'

/* EXO - USER TERNAIRE
- créer un objet littéral contact avec les propriétés suivantes : name, password, isAdmin, age
- écrivez la fonction checkPassword() qui prend 2 paramètres (user, password) pour vérifier si le password est correct
- si le password est correct, affichez "Welcome,  [user.name]!" si l'utilisateur est admin, sinon affichez "Welcome,admin!"
- si le password est incorrect, affichez "Wrong password"
Vous DEVEZ utiliser l'opérateur ternaire pour écrire la condition if ... else if ... else
 */

let USER = {
    user : 'Runa',
    password : 'ok',
    isAdmin : true,
    age : 17,
}
function checkPassword(user,password) {
    let confirmPassword = prompt('Saisie ton mot de passe');
    (confirmPassword === USER.password) ? alert(`welcome, ${USER.user} !`)  (USER.isAdmin === true) ? alert('Welcome, admin !') : alert('Mot de passe incorrecte');
}
checkPassword();