let nrb = Math.floor(Math.random()*100);
let pfc;
if (nrb <=33){
    console.log("pierre");
    pfc = "pierre";
}
else if (nrb <=66){
    console.log("feuille")
    pfc = "feuille";
}
else{
    console.log("ciseaux");
    pfc = "ciseaux";
}
let ask = prompt("Pierre Feuille ou Ciseaux ?")
if (!isNaN(ask)) {
    alert("tu es juste stupide mais ont t'en veux pas");
}
else if (pfc === ask){
    alert("ez");
}
else if (pfc !== ask){
    alert("noob");
}
