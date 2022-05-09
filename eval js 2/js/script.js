// 1-
let user = parseInt(prompt("saisie un nombre entre 1 et 20"))
let IA = Math.floor(Math.random()* 20);
console.log(IA)
if (user > IA){
    alert("Vous avez gagner !")
}
else if (user === IA){
    alert("Match nul")
}
else{
    alert("Vous avez perdu !")
}

// 2-
function somme(int,int2) {
    int = parseInt(prompt("saisie le premier nombre"));
    int2 = parseInt(prompt("saisie le deuxieme nombre"));
    if (isNaN(int) || isNaN(int2)){
        alert("Tu n'a pas saisie des chiffres la")
    }
    let total = int + int2;
    alert(total)
}
somme()

// 3-
function convertiseurMinute(int) {
    int = prompt("Saisie des minutes")
    let conversion = int*60;
    alert(conversion + "Secondes")
}
convertiseurMinute()

// 4-
function plus20(int) {
    int = parseInt(prompt("Saisie un chiffre"))
    alert(int + 20)
}
plus20()
// 6-
let s = 'WayToLearnX';
let rev = s.split('').reverse().join('');
alert(rev);

// 7-
Math.max(7,15,100,2,806,37);

// 8-
function tableau() {
    let array = ["fraise",8,"Tom",]
    alert(array[0]);
}
tableau()

// 10-
nbr = parseInt(prompt("Saisie un nombre"))
nbr2 = parseInt(prompt("Saisie un nouveau nombre"))
if (isNaN(nbr) || isNaN(nbr2)){
    alert("Tu n'a pas saisie des chiffres la")
}
else if (nbr+nbr2 > 100){
    document.style.color = "red";
    document.write("False");
    return False
}
else{
    document.style.color = "green";
    document.write("True");
    return True
}

//11-
function zeroOuPlus(int) {
    if (int <= 0){
        return True
    }
    else {
        return False
    }
}
zeroOuPlus()
// 12-
function choix() {
    if (choix1 === choix2){
        return True
    }
    else{
        return False
    }
}

// 13-
function modulo (){
    if (int % 5 === 0){
        document.style.backgroundColor = "green";
        return True
    }
    else {
        document.style.backgroundColor = "red";
        return False
    }
}

// 16-
function lastElement() {
    let array = ["ez by jonas"];
    return array.pop()
}
lastElement()

// 18 bis-
function affichage() {
    document.write(lastElement())
}
affichage()