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
let ask = prompt("Pierre Feuille ou Ciseaux ?");
if (ask === "pierre" || ask === "feuille" || ask === "ciseaux") {
    if (pfc === ask){
        alert("Égalité");
    }
    else if (nrb <= 33 && ask === "feuille"){
        alert("User a win")
    }
    else if (nrb <= 66 && ask === "ciseaux"){
        alert("User a win")
    }
    else if (nrb >= 66 && ask === "pierre"){
        alert("User a win")
    }
}
else{
    alert("tu es stupide mais ont t'en veux pas");
}
